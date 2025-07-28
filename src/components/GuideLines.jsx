import React from 'react'

const GuideLines = () => {
  return (
      <div className="col">
        <h3>📌 Submission Guidelines</h3>
        <div className="col-flex-row">
            <div className="col">
                <h3>💡 Tips for Success</h3>
                <ul>
                    <p>• Include screenshots and proper file names</p>
                    <p>• Test your code before submission</p>
                    <p>• Add comments explaining your approach</p>
                    <p>• Follow the lab requirements checklist</p>
                </ul>
            </div>
            <div className="col">
                <h3>❌ Common Rejection Reasons</h3>
                <ul>
                    <p>• Missing required files or documentation</p>
                    <p>• Code doesn\'t run or has syntax errors</p>
                    <p>• Incomplete implementation of requirements</p>
                    <p>• Poor code organization or naming</p>
                </ul>
            </div>
            <div className="col">
                <h3>💡 Tips for Success</h3>
                <span>Get support from our community and instructors</span><br/>
                <span>Join our WhatsApp community for real-time help</span><br/>
                <button className="btn-primary">Contact Admn</button>
            </div>

        </div>
      </div>
  )
}

export default GuideLines
