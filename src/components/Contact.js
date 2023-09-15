const Contact=()=>{
    const show=()=>{
        
    }
    return(
        <>
            <div className="conatct">
                <div className="contact-left">
                     <img src="https://img.freepik.com/premium-vector/customer-support-department-staff-helping-client-via-hotline-call-solve-problem-dispatcher_173706-497.jpg?w=740" alt="" />
                </div>
                <div className="contact-right"> 
                    <h1>Contact Us</h1>
                    <form className="form">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="textarea" placeholder="Type your message here.." />
                        <input type="button" value="Submit" onSubmit={show}/>
                    </form>
                    <h4>Thank you for contacting FoodFire.We will reach you ASAP</h4>
                </div>
            </div>
        </>
    )
}
export default Contact;