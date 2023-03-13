import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div class="pb-12">
        <h2 class="text-2xl font-semibold leading-8 tracking-tight text-gray-900">
          Sam Ward
        </h2>
        <p class="text-base leading-7 text-gray-600">Blockchain Engineer</p>
        <ul
          role="list"
          class="mx-auto mt-2 grid max-w-4xl grid-cols-1 gap-x-6 gap-y-20 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          <li class="flex flex-col gap-8 xl:flex-row">
            <img
              class="aspect-[6/5] w-96 flex-none rounded-2xl object-cover"
              src="./sam-cat.png"
              alt=""
            ></img>
            <div class="flex-auto">
              <p class="mt-6 text-base leading-7 text-gray-600">
                Hello, I'm Sam Ward. I'm a Lead Software Developer and Solutions
                Designer with over 20 years of experience in UK supply chain.
                For the past 3 years, I've been a Web 3 Developer focusing on
                blockchain domains and writing EVM smart contracts. I've become
                an expert in blockchain domains, particularly ENS, and have
                written several custom controller and resolver contracts.
              </p>
              <p class="mt-6 text-base leading-7 text-gray-600">
                Currently, I work as a Smart Contract Developer for Namebase,
                where I specialize in writing decentralized domain contracts. In
                my role, I have the opportunity to help shape the future of
                decentralized domain ownership by developing new features and
                improving the user experience for Namebase users.
              </p>
              <p class="mt-6 text-base leading-7 text-gray-600">
                In addition to my work on smart contracts, I have experience
                writing dapps with ethers.js and react.js. I have contributed to
                open source projects and have launched my own project with a
                friend called esf.tools. Esf is a decentralized application that
                allows people to monetize their ENS domains and form subdomain
                communities around subdomain NFTs that are fully tradable. With
                advanced features like token subscriptions and merkle tree
                whitelists, Esf is changing the way people think about domain
                ownership and community building in the web3 space.
              </p>
              <p class="mt-6 text-base leading-7 text-gray-600">
                My passion for Web3 technology and my dedication to staying at
                the forefront of the industry drive my work. I strive to
                continue learning and improving my skills to make meaningful
                contributions to the Web3 ecosystem.
              </p>
              <p class="mt-6 text-base leading-7 text-gray-600">
                If you have any questions or would like to learn more about my
                work, please don't hesitate to get in touch.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul
          role="list"
          class="mx-auto mt-2 grid max-w-4xl grid-cols-1 gap-x-6 gap-y-20 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          <li class="flex flex-col gap-6 xl:flex-row">
            <a href="https://hns.id" target="_blank">
            <img
              class="w-32 flex-none rounded-2xl object-cover hover:p-1 p-3 hover:cursor-pointer"
              src="./handshake-avatar.png"
              alt=""
            ></img></a>
            <a href="https://esf.tools" target="_blank">
            <img
              class="w-32 flex-none rounded-2xl object-cover hover:p-1 p-3 hover:cursor-pointer"
              src="./esf.png"
              alt=""
            ></img></a>
            <a href="https://www.linkedin.com/in/samwward/" target="_blank">
            <img
              class="w-32 flex-none rounded-2xl object-cover hover:p-1 p-3 hover:cursor-pointer"
              src="./linkedin.png"
              alt=""
            ></img></a>
            <a href="https://twitter.com/hodl_pcc" target="_blank">
            <img
              class="w-32 flex-none rounded-2xl object-cover hover:p-1 p-3 hover:cursor-pointer"
              src="./twitter.jpeg"
              alt=""
            ></img></a>
            <a href="https://github.com/hodlthedoor" target="_blank">
            <img
              class="w-32 flex-none rounded-2xl object-cover hover:p-1 p-3 hover:cursor-pointer"
              src="./github-mark.png"
              alt=""
            ></img></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
