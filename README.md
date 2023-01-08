This is a Raffle/Lottery Frontend project bootstrapped with Hardhat.

## Backend

Go [here](https://github.com/theirrationalone/enterRaffle-hardhat.git) and download that Repository. After that Try Running this command given below...

### for local development node only.

```shell
npx hardhat node
```

Follow this [README](https://github.com/theirrationalone/enterRaffle-hardhat/blob/main/README.md) file if you're getting any problem with that Repository.

Now Come Back to Frontend Project and, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

After Adding Entrants/Players into Raffle/Lottery, Go back to backend project, open new terminal but don't close or stop that local node, and try running command given below on that new terminal...

```shell
npx hardhat run ./scripts/enterRaffle.js --network localhost
```

# Thank You! :) 🏴‍☠️