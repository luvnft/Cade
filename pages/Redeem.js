import { useState } from 'react'
import wallet from '../wallet/wallet';
import {
    clusterApiUrl,
    Keypair,
    Transaction,
    Connection,
    Commitment,
    PublicKey,
} from '@solana/web3.js';
import { useUSDCPay } from '../hooks/transfer'
import * as bs58 from 'bs58';
import { getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token';
import {
    BlindChest,
    GamePass,
    BlindBag,
    LotteryTicket,
    CadeGameLife
} from '../components/Data/data'
const Redeem = () => {
    const { createTransaction } = useUSDCPay()
    const [loading, setLoading] = useState(false)
    const signTransaction = async (
        encodedTransaction,
        fromPrivateKey,
        tree,
        type,
        transfer,
        metadata
    ) => {
        try {
            const connection = new Connection(clusterApiUrl('devnet'), 'finalized');
            const feePayer = Keypair.fromSecretKey(bs58.decode(fromPrivateKey));
            const recoveredTransaction = Transaction.from(
                Buffer.from(encodedTransaction, 'base64'),
            );
            recoveredTransaction.partialSign(feePayer);
            const txnSignature = await connection.sendRawTransaction(
                recoveredTransaction.serialize(),
            );
            console.log('txSig from 1-' + txnSignature);
            console.log('Tree from 1-' + tree);
            setTimeout(() => {
                finalCFTMint(tree, type, transfer, metadata);
            }, 500);
        } catch (error) {
            console.log(error);
        }
    };

    const signTransactionv3 = async (
        encodedTransaction,
        fromPrivateKey
    ) => {
        try {
            console.log(encodedTransaction)
            const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
            const feePayer = Keypair.fromSecretKey(bs58.decode(fromPrivateKey));
            const recoveredTransaction = Transaction.from(
                Buffer.from(encodedTransaction, 'base64'),
            );
            recoveredTransaction.partialSign(feePayer);
            const txnSignature = await connection.sendRawTransaction(
                recoveredTransaction.serialize(),
            );

            console.log('txSig from v3-' + txnSignature);

        } catch (error) {
            console.log('from v3-' + error);
        }
    };

    const signTransactionv2 = async (
        encodedTransaction,
        fromPrivateKey,
        mint,
        type,
        transfer
    ) => {
        try {

            const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
            const feePayer = Keypair.fromSecretKey(bs58.decode(fromPrivateKey));
            const recoveredTransaction = Transaction.from(
                Buffer.from(encodedTransaction, 'base64'),
            );
            recoveredTransaction.partialSign(feePayer);
            const txnSignature = await connection.sendRawTransaction(
                recoveredTransaction.serialize(),
            );
            console.log('tx hash from v2-' + txnSignature);
            console.log(`Mint v2 - ${mint}`);

            console.log('tx hash from v2-' + txnSignature);
            console.log(`Mint v2 - ${mint}`);


            transferCNFT(mint);


        } catch (error) {
            console.log('error from v2' + error);
        }
    };

    const finalCFTMint = (
        tree,
        type,
        transfer,
        metadata
    ) => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('x-api-key', 'HI_eHFd0SX8ykSDW');

        var raw = JSON.stringify({
            network: 'devnet',
            creator_wallet: '2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767',
            metadata_uri: metadata,
            merkle_tree: tree,
            max_supply: 1,
            is_mutable: true,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch('https://api.shyft.to/sol/v1/nft/compressed/mint', requestOptions)
            .then(response => response.json())
            .then(result =>
                setTimeout(() => {

                    signTransactionv2(
                        result.result.encoded_transaction,
                        wallet,
                        result.result.mint,
                        type,
                        transfer,
                    )
                }, [8000])
            )
            .catch(error => console.log('error from final', error));
    };

    const transferCNFT = (mintAddress) => {
        console.log(`mint : ${mintAddress}`)
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('x-api-key', 'HI_eHFd0SX8ykSDW');

        var raw = JSON.stringify({
            network: 'devnet',
            nft_address: mintAddress,
            sender: '2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767',
            receiver: '44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su',

        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch('https://api.shyft.to/sol/v1/nft/compressed/transfer', requestOptions)
            .then(response => response.json())
            .then(result => console.log(result)

                // signTransactionv3(result.result.encoded_transaction, wallet),
            )

            .catch(error => console.log('error', error));
    };

    const execute = (metadata) => {

        // createTransaction(
        //     new PublicKey("44n5CYX18L6p4VxVECE9ZNYrAGB9GKD477b78kPNq5Su"),
        //     new PublicKey("2JSg1MdNqRg9z4RP7yiE2NV86fux2BNtF3pSDjhoi767"),
        //     0.00005
        // )

        setLoading(true)

        setTimeout(() => {
            finalCFTMint(
                "5t9aVjzfeeUvXsiQ1wFFHtsMYAgBv9gzMCAqw1PGmH3A",
                "event",
                true,
                metadata
            )
            setLoading(false)
        }, [5000])

    }


    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="font-abc text-7xl font-medium title-font mb-2 text-white ml-16">Redeem Cade</h1>

                        </div>
                        <p class="lg:w-1/2 w-full font-abc text-white text-5xl mt-2">Redeem Your Cade for Cool Prizes.</p>
                    </div>

                    {/* CadeGameLife */}
                    <h1 className='text-white text-5xl font-abc ml-16'>Cade Game Life</h1>
                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {CadeGameLife.map((item) => {
                            return (
                                <>
                                    <div class="bg-black p-6 rounded-lg">
                                        <img height={100} width={100} class="h-60 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">CADE STORE</h3>
                                        <h2 class="text-white text-3xl font-abc title-font mb-4">{item.name}</h2>
                                        <p class="text-white font-abc text-2xl">{item.desc}</p>
                                        {/* needs onClick execute function  */}
                                        <button
                                            onClick={() => execute("https://wd76k5vv2aka7kcyewzori53k65knga2yncczccn2xxleyurucha.arweave.net/sP_ldrXQFA-oWCWy6KO7V7qmmBrDRCyITdXusmKRoI4")}
                                            class="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Buy for {item.price} Cade</button>

                                    </div>
                                </>
                            )
                        })}

                    </div>

                    {/* GamePass */}
                    <h1 className='text-white text-5xl font-abc ml-16'>Cade Game Pass</h1>
                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {GamePass.map((item) => {
                            return (
                                <>
                                    <div class="bg-black p-6 rounded-lg">
                                        <img height={100} width={100} class="h-60 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">CADE STORE</h3>
                                        <h2 class="text-white text-3xl font-abc title-font mb-4">{item.name}</h2>
                                        <p class="text-white font-abc text-2xl">{item.desc}</p>
                                        {/* needs onClick execute function  */}
                                        <button
                                            onClick={() => execute("https://q75jr5p5oh2pq5wc2xsxptsdiqvmi2wjcoo7xjz47bj7qp7eizra.arweave.net/h_qY9f1x9Ph2wtXld85DRCrEaskTnfunPPhT-D_kRmI")}
                                            class="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Buy for {item.price} Cade</button>

                                    </div>
                                </>
                            )
                        })}

                    </div>

                    {/* BlindChest */}
                    <h1 className='text-white text-5xl font-abc ml-16'>Cade Blind Chest</h1>
                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {BlindChest.map((item) => {
                            return (
                                <>
                                    <div class="bg-black p-6 rounded-lg">
                                        <img height={100} width={100} class="h-60 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">CADE STORE</h3>
                                        <h2 class="text-white text-3xl font-abc title-font mb-4">{item.name}</h2>
                                        <p class="text-white font-abc text-2xl">{item.desc}</p>
                                        {/* needs onClick execute function  */}
                                        {loading ? (
                                            <> 
                                             Loading
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => execute("https://q2qspn2bicqlsbseybgxpz2fiwxy4mawajegmxd5h32s4krih4qq.arweave.net/hqEnt0FAoLkGRMBNd-dFRa-OMBYCSGZcfT71LiooPyE")}
                                                    class="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Buy for {item.price} Cade</button>
                                            </>
                                        )}


                                    </div>
                                </>
                            )
                        })}

                    </div>

                    {/* LotteryTicket */}
                    <h1 className='text-white text-5xl font-abc ml-16'>LotteryTicket</h1>
                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {LotteryTicket.map((item) => {
                            return (
                                <>
                                    <div class="bg-black p-6 rounded-lg">
                                        <img height={100} width={100} class="h-60 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">CADE STORE</h3>
                                        <h2 class="text-white text-3xl font-abc title-font mb-4">{item.name}</h2>
                                        <p class="text-white font-abc text-2xl">{item.desc}</p>
                                        {/* needs onClick execute function  */}
                                        <button
                                            onClick={() => execute()}
                                            class="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Buy for {item.price} Cade</button>

                                    </div>
                                </>
                            )
                        })}

                    </div>

                    {/* Blindbag */}
                    <h1 className='text-white text-5xl font-abc ml-16'>Cade BlindBag</h1>
                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {BlindBag.map((item) => {
                            return (
                                <>
                                    <div class="bg-black p-6 rounded-lg">
                                        <img height={100} width={100} class="h-60 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">CADE STORE</h3>
                                        <h2 class="text-white text-3xl font-abc title-font mb-4">{item.name}</h2>
                                        <p class="text-white font-abc text-2xl">{item.desc}</p>
                                        {/* needs onClick execute function  */}
                                        <button
                                            onClick={() => execute(
                                                "https://7nfbqbmned7bnmyijjymjhnmekgf47ojqzhn7r64gypqox7ymaka.arweave.net/-0oYBY0g_hazCEpwxJ2sIoxefcmGTt_H3DYfB1_4YBQ"
                                            )}
                                            class="mt-5 text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">Buy for {item.price} Cade</button>

                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Redeem