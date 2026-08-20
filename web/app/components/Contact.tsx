function Contact() {
  
  return (
    <div className="p-8 bg-blue-300 flex flex-col items-center">
        <h1 className="text-4xl">Contact</h1><br />
       <form className="flex flex-col items-center">
            <label htmlFor="fname">First name:</label><br />
                <input className="bg-gray-50 h-10 w-85 rounded-sm" type="text" id="fname" name="fname" /><br />
            
            <label htmlFor="lname">Last name:</label><br />
                <input className="bg-gray-50 h-10 w-85 rounded-sm" type="text" id="lname" name="lname" /><br />
            
            <label htmlFor="email">Phone:</label><br />
                <input className="bg-gray-50 h-10 w-85 rounded-sm" type="tel" id="phone" name="phone" /><br />
            
            <label htmlFor="email">Email:</label><br />
                <input className="bg-gray-50 h-10 w-85 rounded-sm" type="email" id="email" name="email" /><br />

            <label htmlFor="myComments">What can we do for you?:</label><br />
				<textarea className="bg-gray-50 h-35 w-85 rounded-sm" id="myComments" name="myComments"></textarea><br />
        </form>
    </div>
  );
}

export default Contact;