import '../css/main.css'
import Competences from './Competences'
import AboutMe from './aboutMe'
import VisitCounter from './VisitCounter' // 👈 AJOUT

export default function Main(){
    return(
    <>
      <div className='content'>
        <h2 className='status'>
          Alternance Chef de projet - Architecture logic
          <span className="web">iel</span>
        </h2>

        <Competences />
        <AboutMe />

        <VisitCounter />
      </div>
    </>
    )
}