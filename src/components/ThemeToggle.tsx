import { useTheme } from '../contexts/theme/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="icon-btn-round overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent-primary))] transition-all duration-300 transform hover:scale-105"
      aria-label={theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    >
      {/* グラデーション背景 */}
      <span className={`absolute inset-0 ${theme === 'dark' 
        ? 'bg-gradient-to-br from-[rgb(var(--color-icon-sun))] to-orange-500 opacity-0 group-hover:opacity-20' 
        : 'bg-gradient-to-br from-[rgb(var(--color-icon-moon))] to-indigo-800 opacity-0 group-hover:opacity-20'} 
        transition-opacity duration-300`}></span>
        
      {/* リップル効果 - クリック時に広がる円 */}
      <span className="absolute inset-0 rounded-full transform scale-0 bg-[rgb(var(--color-accent-primary))]/20 group-active:scale-100 transition-transform duration-300"></span>
      
      {theme === 'dark' ? (
        // 太陽アイコン（ライトモードに切り替え） - アニメーション付き
        <div className="relative transition-transform duration-500 transform group-hover:rotate-45">
          <svg className="w-5 h-5 text-[rgb(var(--color-icon-sun))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          {/* 光線エフェクト */}
          <span className="absolute inset-0 rounded-full bg-[rgb(var(--color-icon-sun))]/0 group-hover:bg-[rgb(var(--color-icon-sun))]/10 transition-colors duration-300"></span>
        </div>
      ) : (
        // 月アイコン（ダークモードに切り替え） - アニメーション付き
        <div className="relative transition-transform duration-500 transform group-hover:rotate-12">
          <svg className="w-5 h-5 text-[rgb(var(--color-icon-moon))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          {/* グロー効果 */}
          <span className="absolute inset-0 rounded-full bg-[rgb(var(--color-icon-moon))]/0 group-hover:bg-[rgb(var(--color-icon-moon))]/10 transition-colors duration-300"></span>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle; 