
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'

function Newsletter () {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" style={{textAlign: 'center'}} />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
        
      </div>
    </div>
  )
}

export default Newsletter
