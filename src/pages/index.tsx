import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import { trpc } from "@/utils/trpc";
import { constants } from 'buffer';
import { getOptionsForVote } from '@/utils/getRandomPokemon';
import React, { useMemo, useState } from 'react';
import exp from 'constants';


const Home: NextPage = () => {

	const [ids, updateIds] = useState(() => getOptionsForVote())
	const [first, second] = ids

	const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }])
	const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second }])

	if (firstPokemon.isLoading || secondPokemon.isLoading) return null

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center relative">
			{/* <Head> */}
			<title>Roundest Pokemon</title>
			{/* </Head> */}
			<div className="text-2xl text-center p-8">Which Pokémon is Rounder?</div>
			<div className="p-2"></div>
			<div className="border rounded p-8 flex justify-between items-center max-w-2xl">
				<div className="w-64 h-64  flex flex-col">
					<img src={firstPokemon.data?.sprites.front_default} className="w-full" />
					<div className="text-xl text-center capitalize mt-[-2rem]">{firstPokemon.data?.name}</div>
				</div>
				<div className="p-8">Vs</div>
				<div className="w-64 h-64  flex flex-col">
					<img src={secondPokemon.data?.sprites.front_default} className="w-full" />
					<div className="text-xl text-center capitalize mt-[-2rem]">{secondPokemon.data?.name}</div>

				</div>
			</div>
		</div >
	)
}

export default Home
