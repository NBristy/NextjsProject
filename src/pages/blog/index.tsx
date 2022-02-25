import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../../../components/container'
import Header from '../../../components/header'
import Layout from '../../../components/layout'
import styles from '../../styles/Home.module.css'

const dummy = ['Blog 1', 'Blog 2', 'Blog 3']

const Blog: NextPage = () => {
  return (
    <>
        <Layout>
            <Header Tittle={'List'}/>
            <Container>
                {dummy && dummy.map((v, i)=>{
                    return (
                        <h3 key={i}>{v}</h3>
                    );
                })}
            </Container>
        </Layout>
    </>
  )
}

export default Blog
