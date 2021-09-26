const main = async() => {
    const [owner, randoPerson, randoDude] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();

    //wait for the contract to be mined
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by;", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson).wave();
    await waveTxn.wait();

    waveTxn = await waveContract.connect(randoDude).wave();
    await waveTxn.wait();

    waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveTxn = await waveContract.wave();
    await waveTxn.wait();

    let myWaves = await waveContract.getMyWaves();
    await myWaves;

    myWaves = await waveContract.connect(randoDude).getMyWaves();
    await myWaves;
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();