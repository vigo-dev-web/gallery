import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface ButtonLinkProps {
	children: ReactNode
   href: string
}

const ButtonLink: FC<ButtonLinkProps> = ({ children, href }) => {
	return (
		<Link
			href={href}
			passHref
		>
			<button className='bg-[#A9D041] gap-3 flex items-center mx-auto px-6 py-1.5 text-black rounded-3xl font-medium hover:bg-[#a1bd57] transition-colors duration-200 cursor-pointer'>
				{children}
			</button>
		</Link>
	)
}
export default ButtonLink
