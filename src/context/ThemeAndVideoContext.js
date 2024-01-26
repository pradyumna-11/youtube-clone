import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDark: false,
  activeTab: 'HOME',
  savedVideos: [],
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
