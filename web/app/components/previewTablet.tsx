import TabletContents from './previewTabletContents'

export default function PreviewTablet ({
  className,
  chat,
  isGuidedDemo,
  guidesShown,
  visibleGuide,
  setVisibleGuide,
  logout,
  currentScore,
  currentWallet,
  isEnglish,
  setIsEnglish,
  useLocalVideo,
  setUseLocalVideo,
  showStreamLatency,
}) {
  return (
    <div className={``}>
      <TabletContents
        chat={chat}
        isGuidedDemo={isGuidedDemo}
        guidesShown={guidesShown}
        visibleGuide={visibleGuide}
        setVisibleGuide={setVisibleGuide}
        logout={logout}
        currentScore={currentScore}
        currentWallet={currentWallet}
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
        useLocalVideo={useLocalVideo}
        setUseLocalVideo={setUseLocalVideo}
        showStreamLatency={showStreamLatency}
      />
    </div>
  )
}
