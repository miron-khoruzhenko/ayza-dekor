import React from 'react'

export const Contact = () => {
	return (
		<div className='container py-12 mx-auto flex justify-around'>
			<div className='w-full h-96 p-4'>
				<iframe className='w-full h-full' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.969000232252!2d27.07281425064206!3d40.32607687707423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b6b16ef1999c0b%3A0xba78faf72ad99e1!2sAyza%20Dekoratif%20Mobilya%20San.Tic.Ltd.%C5%9Eti.!5e0!3m2!1sru!2str!4v1679768606562!5m2!1sru!2str" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			<form action="https://example.com/process-form.php" method="post" className='flex flex-col justify-center w-full p-4'>


				<label htmlFor="fname">First Name</label>
				<input className='px-4 py-2 mt-2 mb-4 border border-zinc-400 rounded' type="text" id="fname" name="firstname" placeholder="Your name.." />

				<label htmlFor="email">Email</label>
				<input className='px-4 py-2 mt-2 mb-4 border border-zinc-400 rounded' type="text" id="email" name="email" placeholder="Your email" />

				<label htmlFor="phone">Phone Number</label>
				<input className='px-4 py-2 mt-2 mb-4 border border-zinc-400 rounded' type="text" id="phone" name="phone" placeholder="Your phone number" />

				<label htmlFor="subject">Message</label>
				<textarea id="subject" name="subject" placeholder="Write something.." className='resize-none'></textarea>

				<input className='bg-[#a98054] w-32 mx-auto text-white rounded-md px-4 py-2 my-8'  type="submit" value="Submit" />

			</form>

		</div>
	)
}
