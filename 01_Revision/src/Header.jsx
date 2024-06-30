import './Header.css'
function Header() {
  return (
    <>
      <div className='header'> 
        <div className="left">Currency </div>
        <div className="middle"> 
              <div className="middle-items">Products</div>
              <div className="middle-items"> Developers</div>
              <div className="middle-items"> Company</div>
        </div>
        <div className="right">
          <div className="right-items">Support</div>
          <div className="right-items">Dashboard</div>
        </div>
      </div>
    </>
  )
}
export default Header
