import { FC } from 'react'
import Gallery from '@/components/gallery'
import ButtonLink from '@/components/button-link'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
	return (
		<div className='flex flex-col min-h-screen sm:py-24 py-16'>
			<main className='flex-1'>
				<section className='max-w-7xl mx-auto px-4 sm:px-6'>
					<h1 className='lg:text-4xl sm:text-3xl text-2xl font-bold lg:mb-8 mb-6 mx-auto text-center lg:max-w-[450px] max-w-[400px]'>
						From First Sketch to Final Screw - Here`s the Plan
					</h1>
					<div className='mb-6 mx-auto flex gap-4 '>
						<Gallery />
					</div>
					<p className='text-center mb-6 text-sm'>You`re just one step away from starting - let`s talk.</p>
					<div className='flex justify-center'>
						<ButtonLink href='#'>
							<span>Start Your Project Today!</span>
							<span>
								<svg width={12} height={10}								>
									<use href={`/arrow-right.svg`} />
								</svg>
							</span>
						</ButtonLink>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
