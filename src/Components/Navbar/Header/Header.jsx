import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
        <div className="header-overlay"><div className="header-logo">
            <img 
                src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/5BeansCoffeeShop/Group+129.png" 
                alt="5 Beans Coffee Shop Logo"
            />
        </div></div>
        
        <div className="header-contents">
            <h1>Taste of Home</h1>
        </div> 
    </header>
  )
}

export default Header