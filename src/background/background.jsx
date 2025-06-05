import '../../Background.css'
import vid from '../../asset/vid1.mp4'
import img1 from '../../asset/img1.jpg'
import img2 from '../../asset/img2.jpg'
import img3 from '../../asset/img3.jpg'
const Background = ({playStatus,heroCount}) => {
  if(playStatus){
    return (
        <video className='background' autoPlay loop muted>
            <source src={vid} type='video/mp4'/>
        </video>
  )
}
else if (heroCount===0){
    return <img src={img1} className='background' alt="h"/>
}
else if (heroCount===1){
    return <img src={img2} className='background' alt="i"/>
}
else if (heroCount===2){
    return <img src={img3} className='background' alt="i"/>
}
}

export default background
