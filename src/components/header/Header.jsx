import profileImg from "../../assets/images/profile.png"


const Header = () => {
  return (
    <div className="header">
        <nav className="flex mt-14 mb-8">
            <div className="flex-1">
                <h2 className="text-4xl">Knowledge cafe</h2>
            </div>
            
            <div className="w-10 rounded-full">
                <img src={profileImg} />
            </div>

        </nav>
        <hr />
    </div>
  )
}

export default Header
