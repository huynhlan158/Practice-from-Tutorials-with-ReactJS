import { images } from '../../constants'

function SubHeading ({ title, right }) {
  return (
    <div style={{ marginBottom: '1rem'}}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" style={right && {boxReflect: 'right'}}/>
    </div>
  )
}

export default SubHeading
