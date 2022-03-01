import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AppBar, Avatar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header 
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="#transparent"
        changeColorOnScroll={{
          height: 400,
          color: "#ff0000",
        }}
      />
      <div>
        <Box>
          <Typography variant='h3'>The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed.The constructor function is a bit special. You need to pass your props there (even if you don’t have any), and TypeScript requires you to pass the to the super constructor function.

However, when writing the typical pattern of constructors and super calls in TypeScript’s strict mode, you will get an error if you don’t provide any typings yourself. This is because you create a new class, with a completly new constructor, and TypeScript does not know which parameters to expect!

Therefore, TypeScript will imply them to be any. And implicit any in strict mode is not allowed. </Typography>
        </Box>
      </div>
      
    </div>
  )
}

export default Home
