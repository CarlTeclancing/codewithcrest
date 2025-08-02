import React from 'react'
import './resource.css'
import { Link } from 'react-router-dom'
import Resource from '../../components/Resource'
import Layout from '../../components/layout/Layout'

const resources = [
  { name: 'Vs Code Guide', type:'PDF', pic: '../../assets/img1.jpg', date:'2024-01-15', hashtags:'#Frontend  #Beginner  #Essentials' },
  { name: 'Vs Code Guide', type:'PDF', pic: '../../assets/img1.jpg', date:'2024-01-15', hashtags:'#Frontend  #Beginner  #Essentials' },
  { name: 'Vs Code Guide', type:'PDF', pic: '../../assets/img1.jpg', date:'2024-01-15', hashtags:'#Frontend  #Beginner  #Essentials' },
  { name: 'Vs Code Guide', type:'PDF', pic: '../../assets/img1.jpg', date:'2024-01-15', hashtags:'#Frontend  #Beginner  #Essentials' },
  { name: 'Vs Code Guide', type:'PDF', pic: '../../assets/img1.jpg', date:'2024-01-15', hashtags:'#Frontend  #Beginner  #Essentials' },
  
];
function Resources() {
  return (
    <Layout>
        <div className='headline'>
            <h1>Resources Hub</h1>
            <button>More Resources</button>
        </div>

        <div className="library">
            <div className="nav-link">
                <h2 className='h3'>Resource Library</h2>
                <div className="nav">
                  <Link className='bln'>All</Link>  
                  <Link className='bln'>Tools</Link>  
                  <Link className='bln'>Documents</Link>  
                  <Link className='bln'>Videos</Link>  
                  <Link className='bln'>Essentials</Link>  
                </div>
            </div>

            
            <div className="resource-block">
              <div className="left-block">
                {resources.map((resource, index) => (
                  <Resource
                    key={index}
                    name={resource.name}
                    type={resource.type}
                    Pic={resource.pic}
                    date={resource.date}
                    hashtags={resource.hashtags}
                  />
                 ))}
              </div>

              <div className="right-block">
                 <div className='right-bar'>
                   <div className="headline">
                      <h3>Become a Top Coder</h3>
                      <span className='bln'>Top Coder</span>
                   </div>

                  <div >
                    <div className="bottom-line">
                      <span>Progress</span>
                      <span className='top-value'>60%</span>
                    </div>
                    <progress value={60} max={100}></progress>
                    <p className='quote'>"Every line of code brings<br /> you closer to mastery."</p>
                  </div>
                 </div>

                 <div className='right-bar weekly'>
                    <h3>Weekly Goal</h3>
                    <p className='goal'>320</p>
                    <span>Lines of Code this Week</span>
                    <progress value={60} max={100}></progress>
                    <p>Goal: <span>Lines</span></p>
                 </div>

                 <div className='right-bar'>
                    <h3>Quick Tips</h3>
                     <div className="column">
                        <h4>💡Pro Tips</h4>
                          <p>Use keyboard shortcuts to code faster. Ctrl+D selects the next occurence of selected character.</p>
                     </div>
                      <div className="column">
                        <h4>❌Best Practice</h4>
                          <p>Commit your code frequently with meaningful messages.</p>
                      </div>
                 </div>
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default Resources