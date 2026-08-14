function InfoSidebar() {
    //Simple siderbar to add a description
  return (
    <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 -translate-y-1/2 z-20 max-w-[85vw] sm:max-w-xs bg-black/40 backdrop-blur-sm text-white p-4 sm:p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Move the sun</h2>
      <p className="text-sm text-white/80 leading-relaxed">
        Drag the sun up or down using the slider on the right. As it rises,
        the scene gets brighter — as it sets, everything dims, just like a
        real sunrise or sunset.
      </p>
    </div>
  )
}

export default InfoSidebar