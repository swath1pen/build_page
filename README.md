# This is an example build repo for BioEchem⚡Builds Databse

### NIH 3D Print Database - Deposit Your Build
https://3d.nih.gov/<build>
### Protocols.io - Deposit Your Protocols
[protocols.io ](https://www.protocols.io/)
### Three.js Editor - Render 3D files and scenes for your build.
https://threejs.org/editor/ 


## Step 1: To create your own Build web page:

1. Fork this repo into your GitHub account. The name of the new repo should be the name of your build.
2. Clone repo into Visual Studio Code.
3. Install Node.js

4. **Change build name in main/vite.config.js**
   - Edit line 8.

5. **Change github page name to build name in main/package.json**
   - Edit line 3.

Commit Changes with Git Push


6. **In Terminal Install dependencies:**
   
      ```bash
   npm install gh-pages
   ```

   ```bash
   npm install
   ```

8. **Check build on local server**

   ```bash
   npm run dev
   ```

9. ## Deploy
    
   ```bash
   npm run deploy
   ```

Your build should now be available on a webpage at https://${github_username}.github.io/${build_name}

10. ## Edit Page

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
   These file must be in local and in your git page in the /main directory.

3. **Replace file in /main with your Part List .xlsx file named <build>_partlist.pdf**
   These file must be in local and in your git page in the /main directory.

5. **Change content links for your build in main/src/components/section/Home.jsx**
   - Edit content lines 12 and 16 - Build title and description.

6. **Change links for your build in main/src/components/section/Usage.jsx**
   - Edit content in buildProtocols for your build.
   - Edit content line 25 - Build details.
   - Edit content line 53, 56 - Author info.
   - Edit lines 58 - 83 for author profile links. (Only "href=" links need to be modified. "src=" links are logos.

## License

This project is open source and available under the [MIT License](LICENSE).
---

Happy building/coding/experimenting!
