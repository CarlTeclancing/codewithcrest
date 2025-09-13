import React from 'react'

function LabInfo({ lab , userLabs, confirmModal, submitLab}) {

    function openOrSubmit(){
        if(userLabs.find(ulab=> ulab.id == lab.id && ulab.status == 'started')){
            submitLab(lab)
        }else if (userLabs.find(ulab=> ulab.id == lab.id && ulab.status == 'completed')){
            return 
        }else{
            confirmModal(lab)
        }
    }

    function btnType(){
        if(userLabs.find(ulab=> ulab.id == lab.id && ulab.status == 'started')){
            return 'Submit lab'
        }else if (userLabs.find(ulab=> ulab.id == lab.id && ulab.status == 'completed')){
            return 'DONE'
        }else{
            return 'Start lab'
        }
    }

  return (
    <div className={'lab-info'}>
        <div className="headline">
            <span className='lab-title'>{lab.title ||''}</span>
            {/* <div  style={{display:'flex' ,gap:'10px'}}>
                {hashtags.map((hashtag ,idx) => (
                    <span className="hashtags" key={idx}>{hashtag}</span>
                ))}
            </div> */}
        </div>

        <p className='task'>{lab.description}</p>

        <div className="bottom-line">
            {/* <div style={{display:'flex' ,alignItems:'center' ,gap:5}}>
                <div className="deadline">
                    <i class="bi bi-calendar-check"></i>{' '}
                    <span>{deadline}</span>
                </div>
                <div className="points">
                    <i class="bi bi-star-fill"></i>
                    <span>{point}</span>
                </div>
            </div> */}
            <div>
                {
                    btnType() != 'DONE' ?
                    <button onClick={()=>openOrSubmit()} className={btnType() == 'Submit lab' ?'':'inactive-btn'}>{btnType()}</button>
                    :
                    <button style={{backgroundColor:'rgba(0,175,0 ,0.5)',  border:'none'}} disabled>Completed</button>
                }
            </div>
        </div>
    </div>
  )
}

export default LabInfo