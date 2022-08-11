import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import { trpc } from "@/utils/trpc";
import { constants } from 'buffer';
import { getOptionsForVote } from '@/utils/getRandomPokemon';

const Home: NextPage = () => {

	const [first, second] = getOptionsForVote()

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center relative">
			{/* <Head> */}
			<title>Roundest Pokemon</title>
			{/* </Head> */}
			<div className="text-2xl text-center p-8">Which Pokémon is Rounder?</div>
			<div className="p-2"></div>
			<div className="border rounded p-8 flex justify-between items-center max-w-2xl">
				<div className="w-16 h-16 bg-red-800">{first}</div>
				<div className="p-8">Vs</div>
				<div className="w-16 h-16 bg-red-800">{second}</div>
			</div>
		</div>
	)
}

export default Home
