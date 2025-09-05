# This is an example build repo for BioEchem⚡Builds Databse

### NIH 3D Print Database - Deposit Your Build
https://3d.nih.gov/<build>
### Protocols.io - Deposit Your Protocols
[protocols.io ](https://www.protocols.io/)
### Three.js Editor - Render 3D files and scenes for your build.
https://threejs.org/editor/ 


## To create your own Build web page:

1. Fork your own copy of this page into your GitHub account.
2. Clone repo into Visual Studio Code.
3. Install Node.js

## Edit Build Page
```
build/
├── public/
│   └── build.stl
│   └── scene1.gltf
├── logos/
│   ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── sections/
│   │       ├── Home.jsx #Title, description
│   │       └── About.jsx #Author info, link to profiles, protocols
│   ├── index.css          
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── build_CAD.pdf
├── build_partlist.xlsx
├── index.html
└── README.md
```
1. **Replace file in /main with your CAD .pdf file named <build>_CAD.pdf**

2. **Replace file in /main with your Part List .xlsx file named <build>_partlist.pdf**

3. **Change content links for your build in main/src/components/section/Home.jsx**
   - Edit content lines 12 and 16 - Build title and description.

6. **Change links for your build in main/src/components/section/Usage.jsx**
   - Edit content in buildProtocols for your build.
   - Edit content line 25 - Build details.
   - Edit content line 53, 56 - Author info.
   - Edit lines 58 - 83 for author profile links. (Only "href=" links need to be modified. "src=" links are logos.

8. **Change build name in main/vite.config.js**
   - Edit line 8.

9. **Change github page name to build name in main/package.json**
   - Edit line 3.
      

11. **Make new public Github repository with build name and add all edited repo files.**

12. **Deploy**
Ready to Deploy with GitHubPage.

1. **Install dependencies:**

      ```bash
   npm install gh-pages
   ```

   ```bash
   npm install
   ```

3. **Check build on local server**

   ```bash
   npm run dev
   ``

4. ## Deploy


```bash
npm run deploy
``

Your build should now be available on a webpage at https://${githubUser}.github.io/${repoName}

## License

This project is open source and available under the [MIT License](LICENSE).
---

Happy building/coding/experimenting!
