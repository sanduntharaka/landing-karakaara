import s from './OrnDivider.module.css';

export default function OrnDivider() {
  return (
    <div className={s.divider} aria-hidden>
      <div className={s.line} />
      <svg width="52" height="24" viewBox="0 0 52 24" fill="none" className={s.icon}>
        <circle cx="26" cy="12" r="4.5" fill="#8B2635" opacity="0.65"/>
        <circle cx="11" cy="12" r="2.8" fill="#D1A46E" opacity="0.55"/>
        <circle cx="41" cy="12" r="2.8" fill="#D1A46E" opacity="0.55"/>
        <circle cx="2.5" cy="12" r="1.8" fill="#D1A46E" opacity="0.35"/>
        <circle cx="49.5" cy="12" r="1.8" fill="#D1A46E" opacity="0.35"/>
        <line x1="15" y1="12" x2="21.5" y2="12" stroke="#D1A46E" strokeWidth="1" opacity="0.5"/>
        <line x1="30.5" y1="12" x2="37" y2="12" stroke="#D1A46E" strokeWidth="1" opacity="0.5"/>
        <line x1="5" y1="12" x2="8" y2="12" stroke="#D1A46E" strokeWidth="1" opacity="0.35"/>
        <line x1="44" y1="12" x2="47" y2="12" stroke="#D1A46E" strokeWidth="1" opacity="0.35"/>
      </svg>
      <div className={s.line} />
    </div>
  );
}
