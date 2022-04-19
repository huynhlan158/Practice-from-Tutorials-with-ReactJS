import { useState } from 'react'
import SignUpInfo from './SignUpInfo'
import PersonalInfo from './PersonalInfo'
import OtherInfo from './OtherInfo'

function Form () {
    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        username: '',
        nationality: '',
        other: ''
    })
    const FormTitles = ['Sign up', 'Personal Info', 'Other']
    const PageDisplay = () => {
        switch (page) {
            case 1:
                return <PersonalInfo formData={formData} setFormData={setFormData} />
            case 2:
                return <OtherInfo formData={formData} setFormData={setFormData} />
            default:
                return <SignUpInfo formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className="form">
            <div className="progressbar">
                <div style={{width: page === 0 ? "33.33%" : page === 1 ? "66.66%" : "100%"}}></div>
            </div>

            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>

                <div className="body">{PageDisplay()}</div>

                <div className="footer">
                    <button 
                        onClick={() => setPage(curPage => curPage-1)}
                        disabled={page == 0}
                    >Prev</button>

                    <button 
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("Form submitted")
                                console.log(formData)
                            } else {
                                setPage(curPage => curPage+1)
                            }
                        }}
                    >
                        {page === (FormTitles.length - 1) ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form