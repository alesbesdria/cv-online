import '../css/main.css'
import Competences from './Competences'
import AboutMe from './aboutMe'
export default function Main(){
    return(<>
    <div className='content'>
        <h2 className='status'>Alternance Chef de projet - Architecture logic<span class="web">iel</span></h2>
        <Competences></Competences>
        <AboutMe></AboutMe>
   </div>
    </>)
}