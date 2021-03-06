/***
 * web3.js 의 구조 분석을 위한 snapshot.
 * 본 파일에 선언된 객체는 프로젝트에서 사용 되지 않음.
 *
 * geth 에서 web3 객체를 확인 해 보면 아래와 같은 구조를 갖는 데,
 * api version 을 보면 0.20.1 이지만 personal api 를 제공 하고 있다.
 * ethereum wiki 에 기재된 0.2x.x. 버전 api spec 문서에는 personal api 가 없고,
 * web3js.readthdocs.io 에 기재된 1.0 버전 api spec 문서에는 personal api 가 있는 것으로 보아
 * api 와 spec 문서의 버전이 맞지 않는 것으로 보인다.
 ***/

var web3 = {
    admin: {
        datadir: "/Users/parkyohan/repositories/go-ethereum/build/bin/local_data",
        nodeInfo: {
            enode: "enode://5c91949191ff6f19ad4509b91557c9d47ba846e779ff7375249e86e935b2794480d1ddb860c7d4511a0c28b8b66f94f88fa35ad7eb62a6f0a1a2cd25eb84cde9@10.193.26.179:30303",
            id: "0bdefba21cbcf34bf46ea0bc9071e1398e77265ba6f7484486e94bd33233bdb0",
            ip: "10.193.26.179",
            listenAddr: "[::]:30303",
            name: "Geth/v1.8.17-stable-8bbe7207/darwin-amd64/go1.11",
            ports: {
                discovery: 30303,
                listener: 30303
            },
            protocols: {
                eth: {...}
            }
        },
        peers: [],
        addPeer: function(){},
        addTrustedPeer: function(){},
        clearHistory: function(){},
        exportChain: function(){},
        getDatadir: function(callback){},
        getNodeInfo: function(callback){},
        getPeers: function(callback){},
        importChain: function(){},
        removePeer: function(){},
        removeTrustedPeer: function(){},
        sleep: function /*github.com/ethereum/go-ethereum/console.(*bridge).Sleep-fm*/(){},
        sleepBlocks: function /*github.com/ethereum/go-ethereum/console.(*bridge).SleepBlocks-fm*/(){},
        startRPC: function(){},
        startWS: function(){},
        stopRPC: function(){},
        stopWS: function(){}
    },
    bzz: {
        hive: undefined,
        info: undefined,
        blockNetworkRead: function(){},
        download: function(){},
        get: function(){},
        getHive: function(callback){},
        getInfo: function(callback){},
        modify: function(){},
        put: function(){},
        retrieve: function(){},
        store: function(){},
        swapEnabled: function(){},
        syncEnabled: function(){},
        upload: function(){}
    },
    currentProvider: {
        newAccount: function(){},
        openWallet: function(){},
        send: function /*github.com/ethereum/go-ethereum/console.(*bridge).Send-fm*/(){},
        sendAsync: function /*github.com/ethereum/go-ethereum/console.(*bridge).Send-fm*/(){},
        sign: function(){},
        unlockAccount: function(){}
    },
    db: {
        getHex: function(){},
        getString: function(){},
        putHex: function(){},
        putString: function(){}
    },
    debug: {
        backtraceAt: function(){},
        blockProfile: function(){},
        chaindbCompact: function(){},
        chaindbProperty: function(){},
        cpuProfile: function(){},
        dumpBlock: function(){},
        freeOSMemory: function(){},
        gcStats: function(){},
        getBadBlocks: function(){},
        getBlockRlp: function(){},
        getModifiedAccountsByHash: function(){},
        getModifiedAccountsByNumber: function(){},
        goTrace: function(){},
        memStats: function(){},
        metrics: function(){},
        mutexProfile: function(){},
        preimage: function(){},
        printBlock: function(){},
        seedHash: function(){},
        setBlockProfileRate: function(){},
        setGCPercent: function(){},
        setHead: function(){},
        setMutexProfileFraction: function(){},
        stacks: function(){},
        startCPUProfile: function(){},
        startGoTrace: function(){},
        stopCPUProfile: function(){},
        stopGoTrace: function(){},
        storageRangeAt: function(){},
        traceBadBlock: function(){},
        traceBlock: function(){},
        traceBlockByHash: function(){},
        traceBlockByNumber: function(){},
        traceBlockFromFile: function(){},
        traceTransaction: function(){},
        verbosity: function(){},
        vmodule: function(){},
        writeBlockProfile: function(){},
        writeMemProfile: function(){},
        writeMutexProfile: function(){}
    },
    eth: {
        accounts: ["0xf0f7bb8d77e46ec37097e920e9a1f2324ee19a05", "0xd5a304dfc64bf643831f2b356da5c82de4912dac"],
        blockNumber: 12,
        coinbase: "0xf0f7bb8d77e46ec37097e920e9a1f2324ee19a05",
        compile: {
            lll: function(){},
            serpent: function(){},
            solidity: function(){}
        },
        defaultAccount: undefined,
        defaultBlock: "latest",
        gasPrice: 1000000000,
        hashrate: 80,
        mining: false,
        pendingTransactions: [{
            blockHash: null,
            blockNumber: null,
            from: "0xf0f7bb8d77e46ec37097e920e9a1f2324ee19a05",
            gas: 90000,
            gasPrice: 1000000000,
            hash: "0x28bfcdd742d71228a9c0424202a7bd9e137ad90128db40d969342cfc5faabf78",
            input: "0x",
            nonce: 0,
            r: "0xe31747209ae8d0cdc326f6bc35509aa8556c2f633a4275223c23f6a1a9af227e",
            s: "0x17a7f4437fa2439d51b17624572c299d3500725f13ed278d7bc531f96a113bcd",
            to: "0xd5a304dfc64bf643831f2b356da5c82de4912dac",
            transactionIndex: 0,
            v: "0x4594",
            value: 1000000000000000000
        }],
        protocolVersion: "0x3f",
        syncing: false,
        call: function(){},
        chainId: function(){},
        contract: function(abi){},
        estimateGas: function(){},
        filter: function(options, callback, filterCreationErrorCallback){},
        getAccounts: function(callback){},
        getBalance: function(){},
        getBlock: function(){},
        getBlockNumber: function(callback){},
        getBlockTransactionCount: function(){},
        getBlockUncleCount: function(){},
        getCode: function(){},
        getCoinbase: function(callback){},
        getCompilers: function(){},
        getGasPrice: function(callback){},
        getHashrate: function(callback){},
        getMining: function(callback){},
        getPendingTransactions: function(callback){},
        getProtocolVersion: function(callback){},
        getRawTransaction: function(){},
        getRawTransactionFromBlock: function(){},
        getStorageAt: function(){},
        getSyncing: function(callback){},
        getTransaction: function(){},
        getTransactionCount: function(){},
        getTransactionFromBlock: function(){},
        getTransactionReceipt: function(){},
        getUncle: function(){},
        getWork: function(){},
        iban: function(iban){},
        icapNamereg: function(){},
        isSyncing: function(callback){},
        namereg: function(){},
        resend: function(){},
        sendIBANTransaction: function(){},
        sendRawTransaction: function(){},
        sendTransaction: function(){},
        sign: function(){},
        signTransaction: function(){},
        submitTransaction: function(){},
        submitWork: function(){}
    },
    ethash: {
        getHashrate: function(){},
        getWork: function(){},
        submitHashRate: function(){},
        submitWork: function(){}
    },
    isIBAN: undefined,
    miner: {
        getHashrate: function(){},
        setEtherbase: function(){},
        setExtra: function(){},
        setGasPrice: function(){},
        setRecommitInterval: function(){},
        start: function(){},
        stop: function(){}
    },
    net: {
        listening: true,
        peerCount: 0,
        version: "1",
        getListening: function(callback){},
        getPeerCount: function(callback){},
        getVersion: function(callback){}
    },
    personal: {
        listAccounts: ["0xf0f7bb8d77e46ec37097e920e9a1f2324ee19a05", "0xd5a304dfc64bf643831f2b356da5c82de4912dac"],
        listWallets: [{
            accounts: [/*...*/],
            status: "Unlocked",
            url: "keystore:///Users/parkyohan/repositories/go-ethereum/build/bin/local_data/keystore/UTC--2018-10-19T07-29-51.296615000Z--f0f7bb8d77e46ec37097e920e9a1f2324ee19a05"
        }, {
            accounts: [/*...*/],
            status: "Unlocked",
            url: "keystore:///Users/parkyohan/repositories/go-ethereum/build/bin/local_data/keystore/UTC--2018-10-19T07-30-03.033501000Z--d5a304dfc64bf643831f2b356da5c82de4912dac"
        }],
        deriveAccount: function(){},
        ecRecover: function(){},
        getListAccounts: function(callback){},
        getListWallets: function(callback){},
        importRawKey: function(){},
        lockAccount: function(){},
        newAccount: function /*github.com/ethereum/go-ethereum/console.(*bridge).NewAccount-fm*/(){},
        openWallet: function /*github.com/ethereum/go-ethereum/console.(*bridge).OpenWallet-fm*/(){},
        sendTransaction: function(){},
        sign: function /*github.com/ethereum/go-ethereum/console.(*bridge).Sign-fm*/(){},
        signTransaction: function(){},
        unlockAccount: function /*github.com/ethereum/go-ethereum/console.(*bridge).UnlockAccount-fm*/(){}
    },
    providers: {
        HttpProvider: function(host, timeout, user, password){},
        IpcProvider: function(path, net){}
    },
    rpc: {
        modules: {
            admin: "1.0",
            debug: "1.0",
            eth: "1.0",
            ethash: "1.0",
            miner: "1.0",
            net: "1.0",
            personal: "1.0",
            rpc: "1.0",
            txpool: "1.0",
            web3: "1.0"
        },
        getModules: function(callback){}
    },
    settings: {
        defaultAccount: undefined,
        defaultBlock: "latest"
    },
    shh: {
        addPrivateKey: function(){},
        addSymKey: function(){},
        deleteKeyPair: function(){},
        deleteSymKey: function(){},
        generateSymKeyFromPassword: function(){},
        getPrivateKey: function(){},
        getPublicKey: function(){},
        getSymKey: function(){},
        hasKeyPair: function(){},
        hasSymKey: function(){},
        info: function(){},
        markTrustedPeer: function(){},
        newKeyPair: function(){},
        newMessageFilter: function(options, callback, filterCreationErrorCallback){},
        newSymKey: function(){},
        post: function(){},
        setMaxMessageSize: function(){},
        setMinPoW: function(){},
        version: function(){}
    },
    txpool: {
        content: {
            pending: {
                0xf0F7bB8d77e46EC37097e920E9a1f2324eE19A05: {...}
            },
            queued: {}
        },
        inspect: {
            pending: {
                0xf0F7bB8d77e46EC37097e920E9a1f2324eE19A05: {...}
            },
            queued: {}
        },
        status: {
            pending: 1,
            queued: 0
        },
        getContent: function(callback){},
        getInspect: function(callback){},
        getStatus: function(callback){}
    },
    version: {
        api: "0.20.1",
        ethereum: "0x3f",
        network: "1",
        node: "Geth/v1.8.17-stable-8bbe7207/darwin-amd64/go1.11",
        whisper: undefined,
        getEthereum: function(callback){},
        getNetwork: function(callback){},
        getNode: function(callback){},
        getWhisper: function(callback){}
    },
    BigNumber: function a(e,n){},
    createBatch: function(){},
    fromAscii: function(str){},
    fromDecimal: function(value){},
    fromICAP: function(icap){},
    fromUtf8: function(str){},
    fromWei: function(number, unit){},
    isAddress: function(address){},
    isChecksumAddress: function(address){},
    isConnected: function(){},
    padLeft: function(string, chars, sign){},
    padRight: function(string, chars, sign){},
    reset: function(keepIsSyncing){},
    setProvider: function(provider){},
    sha3: function(string, options){},
    toAscii: function(hex){},
    toBigNumber: function(number){},
    toChecksumAddress: function(address){},
    toDecimal: function(value){},
    toHex: function(val){},
    toUtf8: function(hex){},
    toWei: function(number, unit){}
}
