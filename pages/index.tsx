import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>易搭云</title>
			</Head>

			<div>hello</div>
		</div>
	);
};

export default Home;
