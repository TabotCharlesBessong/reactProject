import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
  return (
		<button
			type="button"
			// onClick={onGoogleClick}
			className="flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-700 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-lg"
		>
			<FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
			Continue with Google
		</button>
	);
}

export default OAuth