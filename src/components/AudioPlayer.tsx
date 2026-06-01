import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Music, Sliders, Wind, CloudRain } from "lucide-react";
import { AMBIENT_TRACKS } from "../data";
import { AmbientTrack } from "../types";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<AmbientTrack>(AMBIENT_TRACKS[0]);
  const [volume, setVolume] = useState(0.4);
  const [showDrawer, setShowDrawer] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initial audio setup
    audioRef.current = new Audio(currentTrack.url);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    
    const wasPlaying = isPlaying;
    audioRef.current.pause();
    
    audioRef.current.src = currentTrack.url;
    audioRef.current.volume = volume;
    audioRef.current.loop = true;
    
    if (wasPlaying) {
      audioRef.current.play().catch((err) => {
        console.log("Audio play error (requires user interaction first):", err);
        setIsPlaying(false);
      });
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          alert("Por favor, interactúe con la página primero para reproducir el audio de ambiente.");
          console.log("Audio play failed on first click:", err);
        });
    }
  };

  const selectTrack = (track: AmbientTrack) => {
    setCurrentTrack(track);
  };

  const getIcon = (iconName: string, className = "w-4 h-4") => {
    switch (iconName) {
      case "CloudRain":
        return <CloudRain className={className} />;
      case "Wind":
        return <Wind className={className} />;
      default:
        return <Music className={className} />;
    }
  };

  return (
    <div className="relative" id="audio-panel">
      {/* Mini control pill */}
      <div className="flex items-center gap-2 bg-brand-cream/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-wood/30 shadow-sm">
        <button
          onClick={togglePlayback}
          className="p-1 rounded-full text-brand-olive hover:bg-brand-sand transition-colors duration-200"
          title={isPlaying ? "Pausar sonido ambiente" : "Reproducir sonido ambiente"}
          id="btn-play-pause-ambient"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-brand-olive stroke-[2.5]" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-brand-olive stroke-[2.5] ml-0.5" />
          )}
        </button>

        <span className="text-xs font-sans text-brand-charcoal/70 max-w-[90px] truncate hidden md:inline">
          {isPlaying ? currentTrack.name : "Sonido Zen"}
        </span>

        <button
          onClick={() => setShowDrawer(!showDrawer)}
          className="p-1 rounded-full text-brand-brown hover:bg-brand-sand transition-colors duration-200"
          title="Ajustar pista acústica"
          id="btn-toggle-sound-settings"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Popover Selection Drawer */}
      {showDrawer && (
        <div 
          className="absolute right-0 top-11 z-[9999] w-64 bg-brand-cream p-4 rounded-xl border border-brand-wood/40 shadow-xl"
          id="audio-selector-popover"
        >
          <div className="flex items-center justify-between mb-3 pb-1 border-b border-brand-sand">
            <h4 className="text-sm font-semibold font-serif text-brand-olive-dark">
              Ambiente Sonoro
            </h4>
            <button 
              onClick={() => setShowDrawer(false)}
              className="text-xs text-brand-brown hover:text-brand-olive"
            >
              Cerrar
            </button>
          </div>

          <p className="text-[11px] text-brand-charcoal/60 mb-3 font-sans leading-relaxed">
            Inmérjase en la atmósfera sensorial de Komorebi con sonidos ambientales en bucle:
          </p>

          <div className="space-y-1.5 mb-4">
            {AMBIENT_TRACKS.map((track) => {
              const active = currentTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => selectTrack(track)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-all duration-200 ${
                    active 
                      ? "bg-brand-olive text-brand-cream font-medium" 
                      : "bg-brand-sand/50 text-brand-charcoal/80 hover:bg-brand-sand"
                  }`}
                  id={`track-select-${track.id}`}
                >
                  <div className="flex items-center gap-2">
                    {getIcon(track.iconName, `w-3.5 h-3.5 ${active ? "text-brand-cream" : "text-brand-olive"}`)}
                    <span>{track.name}</span>
                  </div>
                  {active && isPlaying && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cream opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cream"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Volume Control */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-brand-charcoal/70">
              <span className="font-medium">Volumen</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setVolume(volume === 0 ? 0.4 : 0)}
                className="text-brand-olive hover:text-brand-olive-dark"
                id="btn-volume-toggle"
              >
                {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-1 bg-brand-sand accent-brand-olive rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
