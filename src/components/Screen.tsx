interface ChildrenProp {
  children?: React.ReactNode
}

const Screen: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen place-items-center place-content-center">
      {children}
    </div>
  )
}

export default Screen
