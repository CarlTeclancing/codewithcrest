import React from 'react'

const GuideLines = () => {
  return (
      <div className="guidelines">
        <h3>📌 Submission Guidelines</h3>
        <div className="guide-container">
            <div className="guide">
                <h3>💡 Tips for Success</h3>
                {/* <ul> */}
                    {/* <span>• Include screenshots and proper file names</span> */}
                    <span>• Test your code before submission</span>
                    <span>• Add comments explaining your approach</span>
                    <span>• Follow the lab requirements checklist</span>
                {/* </ul> */}
            </div>
            <div className="guide">
                <h3>❌ Common Rejection Reasons</h3>
                {/* <ul> */}
                    <span>• Missing required files or documentation</span>
                    <span>• Code doesn\'t run or has syntax errors</span>
                    <span>• Incomplete implementation of requirements</span>
                    <span>• Poor code organization or naming</span>
                {/* </ul> */}
            </div>
            {/* <div className="guide">
                <h3>💡 Tips for Success</h3>
                <span>Get support from our community and instructors</span>
                <span>Join our WhatsApp community for real-time help</span>
                <button className="">Contact Admn</button>
            </div> */}

        </div>
      </div>
  )
}

export default GuideLines
