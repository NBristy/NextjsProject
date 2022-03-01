// import * as React from 'react';
// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { AppBar, Avatar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography, Menu, MenuItem } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu'

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const Home: NextPage = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <AppBar position="static">
//           <Container maxWidth="xl">
//             <Toolbar disableGutters>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//               >
//                 LOGO
//               </Typography>

//               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleOpenNavMenu}
//                   color="inherit"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorElNav}
//                   anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                   }}
//                   open={Boolean(anchorElNav)}
//                   onClose={handleCloseNavMenu}
//                   sx={{
//                     display: { xs: 'block', md: 'none' },
//                   }}
//                 >
//                   {pages.map((page) => (
//                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                       <Typography textAlign="center">{page}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//               >
//                 LOGO
//               </Typography>
//               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                 {pages.map((page) => (
//                   <Button
//                     key={page}
//                     onClick={handleCloseNavMenu}
//                     sx={{ my: 2, color: 'white', display: 'block' }}
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </Box>

//               <Box sx={{ flexGrow: 0 }}>
//                 <Tooltip title="Open settings">
//                   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                   </IconButton>
//                 </Tooltip>
//                 <Menu
//                   sx={{ mt: '45px' }}
//                   id="menu-appbar"
//                   anchorEl={anchorElUser}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={Boolean(anchorElUser)}
//                   onClose={handleCloseUserMenu}
//                 >
//                   {settings.map((setting) => (
//                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                       <Typography textAlign="center">{setting}</Typography>
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to My Project Next.js!
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.tsx</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }

// export default Home
