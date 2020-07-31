const identityABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"kinds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_factory","type":"address"},{"name":"_data","type":"bytes"}],"name":"forwardFactory","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"future8","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"future4","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFacetCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSelectors","outputs":[{"name":"","type":"bytes4[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rechargeAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"future7","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"facetCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_destination","type":"address"},{"name":"_data","type":"bytes"}],"name":"forward","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future1","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"future3","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newState","type":"uint256"}],"name":"setState","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future6","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"future5","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recovery","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_walletAddress","type":"address"}],"name":"setWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_destination","type":"address"},{"name":"_data","type":"bytes"}],"name":"forwardValue","outputs":[{"name":"","type":"bytes"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"future2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newRecovery","type":"address"}],"name":"setRecovery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"selectors","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"destination","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"},{"indexed":false,"name":"result","type":"bytes"}],"name":"Forward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"kind","type":"uint256"},{"indexed":false,"name":"contractAddress","type":"address"}],"name":"FactoryForward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"old","type":"address"},{"indexed":false,"name":"current","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"old","type":"address"},{"indexed":false,"name":"current","type":"address"}],"name":"NewRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"old","type":"string"},{"indexed":false,"name":"current","type":"string"}],"name":"NewName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"old","type":"address"},{"indexed":false,"name":"current","type":"address"}],"name":"NewWallet","type":"event"}];
const walletABI = [{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferPNFT","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_receivingToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_kind","type":"uint256"}],"name":"exchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_from","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"onERC721Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_transferingToken","type":"address"},{"name":"_transferingAmount","type":"uint256"},{"name":"_to","type":"address"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferExchangeReceiving","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_tokenId","type":"bytes32"},{"name":"_amount","type":"uint256"},{"name":"_destination","type":"address"},{"name":"_data","type":"bytes"}],"name":"forwardValuePNFT","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"unlimitDaily","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"nfts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"future8","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferSending","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isNFToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_transferingToken","type":"address"},{"name":"_transferingAmount","type":"uint256"},{"name":"_name","type":"string"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferExchangeDomainReceiving","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future4","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"_isAllowed","type":"bool"}],"name":"limitTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_transferingToken","type":"address"},{"name":"_sendingAmount","type":"uint256"},{"name":"_to","type":"address"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferExchangeSending","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFacetCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"tokenFallback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_transferingToken","type":"address"},{"name":"_sendingAmount","type":"uint256"},{"name":"_name","type":"string"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferExchangeDomainSending","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getSelectors","outputs":[{"name":"","type":"bytes4[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_transferingToken","type":"address"},{"name":"_receivingAmount","type":"uint256"}],"name":"getTransferExchangeInfoReceiving","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_receivingToken","type":"address"},{"name":"_sendingAmount","type":"uint256"}],"name":"getExchangeInfoSending","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"daySpent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNFTokens","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_name","type":"string"},{"name":"_tokenId","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferPNFTDomain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"future7","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenRef","type":"string"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferNFTRef","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"facetCategory","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_destination","type":"address"},{"name":"_data","type":"bytes"}],"name":"forward","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future1","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_from","type":"address"},{"name":"_tokenId","type":"bytes32"},{"name":"_amount","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"onPNFTReceived","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future3","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_receivingToken","type":"address"},{"name":"_receivingAmount","type":"uint256"}],"name":"getExchangeInfoReceiving","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"dayByToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_transferValue","type":"uint256"}],"name":"getSpendToValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"dayLimits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"unlimitValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTokens","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"allowedReceiver","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sendingToken","type":"address"},{"name":"_transferingToken","type":"address"},{"name":"_sendingAmount","type":"uint256"}],"name":"getTransferExchangeInfoSending","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_name","type":"string"},{"name":"_tokenRef","type":"string"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferNFTRefDomain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future6","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_name","type":"string"},{"name":"_value","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferDomain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_collector","type":"address"}],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future5","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isToLimited","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_name","type":"string"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferNFTDomain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unlimitTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_limit","type":"uint256"}],"name":"limitDaily","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"future2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isValueLimited","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isDayLimited","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"maxValues","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_totalAmount","type":"uint256"}],"name":"getValueToSpend","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"selectors","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_limit","type":"uint256"}],"name":"limitValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_name","type":"string"},{"name":"_value","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferDomainSending","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_amountOrId","type":"uint256"},{"name":"_destination","type":"address"},{"name":"_data","type":"bytes"}],"name":"forwardValue","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"string"},{"name":"_kind","type":"uint256"}],"name":"transferNFT","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenAddress","type":"address"},{"indexed":true,"name":"kind","type":"uint256"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokenId","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"commission","type":"uint256"},{"indexed":false,"name":"data","type":"string"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenAddress","type":"address"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"tokenId","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Receive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"LimitValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"destination","type":"address"},{"indexed":false,"name":"isAllowed","type":"bool"}],"name":"LimitTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"dayLimit","type":"uint256"}],"name":"LimitDaily","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"}],"name":"UnlimitValue","type":"event"},{"anonymous":false,"inputs":[],"name":"UnlimitTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"}],"name":"UnlimitDaily","type":"event"}];
const GRAPH_URL = "http://18.158.159.110:8000";
const SUBGRAPH = "/subgraphs/name/gperezalba/bank-subgraph-mainnet";

const App = {
    web3: null,
	account: null,
	identity: null,
	wallet: null,
	query: null,

    start: async function(web3) {
        this.web3 = web3;

        try {
			const accounts = await this.web3.eth.getAccounts();
            this.account = accounts[0];

        } catch (error) {
            console.error("Could not connect to contract or chain.");
		}
		
		this.initSmartID();
	},

	updateInfo: async function() {
		let identityObj = await this.querySubgraph();
		if (identityObj != null) {
			if (identityObj.length > 0) {
				if (identityObj.length == 1) {

					//INFO GENERAL
					document.getElementById("info").innerHTML = "Nombre de usuario: " + 
						identityObj[0].wallet.name.id + 
						" <br> Wallet externo 'owner': " +
						identityObj[0].owner +
						" <br> Wallet externo 'recovery': " +
						identityObj[0].recovery;

					//LIMIT TO
					let isToLimited = "DESACTIVADO <br> ";
					
					if (identityObj[0].wallet.isToLimited) {
						isToLimited = "ACTIVADO <br> ";
					}

					document.getElementById("limitTo").innerHTML = "Estado: " + 
						isToLimited;
					
					if (identityObj[0].wallet.isToLimited) {
						identityObj[0].wallet.allowedDestinations.forEach(function (destination) {
							let inp = document.getElementById("limitTo").innerHTML;
							document.getElementById("limitTo").innerHTML = inp + " <br> Nombre: " +
							destination.name.id + 
							" <br> Wallet: " +
							destination.id + 
							" <br> <br> ";
						})
					}

					//LIMIT DAY
					if (identityObj[0].wallet.dayLimits.length > 0) {
						document.getElementById("limitDay").innerHTML = "LÍMITES: <br>"
						identityObj[0].wallet.dayLimits.forEach(function (dayLimits) {
							let state = "INACTIVO";
							if (dayLimits.isActive) {
								state = "ACTIVO"
							}

							let inp = document.getElementById("limitDay").innerHTML;
							document.getElementById("limitDay").innerHTML = inp + " <br> Token: " +
							dayLimits.token.tokenSymbol + 
							" <br> Límite máximo diario: " +
							dayLimits.limit / 1e18 + 
							" <br> Estado: " +
							state + 
							" <br> <br> ";
						})
					} else {
						document.getElementById("limitDay").innerHTML = "(NINGÚN LÍMITE) <br>"
					}

					//LIMIT VALUE
					if (identityObj[0].wallet.valueLimits.length > 0) {
						document.getElementById("limitValue").innerHTML = "LÍMITES: <br>"
						identityObj[0].wallet.valueLimits.forEach(function (valueLimits) {
							let state = "INACTIVO";
							if (valueLimits.isActive) {
								state = "ACTIVO"
							}

							let inp = document.getElementById("limitValue").innerHTML;
							document.getElementById("limitValue").innerHTML = inp + " <br> Token: " +
							valueLimits.token.tokenSymbol + 
							" <br> Límite monto máximo: " +
							valueLimits.limit / 1e18 + 
							" <br> Estado: " +
							state + 
							" <br> <br> ";
						})
					} else {
						document.getElementById("limitValue").innerHTML = "(NINGÚN LÍMITE) <br>"
					}
				} else {
					console.log("Este wallet es recovery de varias SmartID")
				}
			} else {
				console.log("Este wallet no es recovery de ninguna SmartID")
			}
		}
	},

	initSmartID: async function() {
		this.buildQuery();
		let identityObj = await this.querySubgraph();
		if (identityObj != null) {
			if (identityObj.length > 0) {
				if (identityObj.length == 1) {
					this.instantiateIdentity(identityObj[0].id)
					this.instantiateWallet(identityObj[0].wallet.id);
					this.updateInfo();
				} else {
					console.log("Este wallet es recovery de varias SmartID")
				}
			} else {
				console.log("Este wallet no es recovery de ninguna SmartID")
			}
		}
	},

	limitToTrue: async function() {
		this.limitTo(true);
	},

	limitToFalse: async function() {
		this.limitTo(false);
	},

	limitTo: async function(_isAllowed) {
		let _destination = document.getElementById("newLimitToDestination").value; 
		let _validAddress = this.web3.utils.isAddress(_destination);
		if (_validAddress) {
			await this.wallet.methods.limitTo(_destination, _isAllowed).send({from: this.account, gas: 210000});
			this.updateInfo();
		} else {
			alert("Wallet no válido");
		}
	},

	limitDaily: async function() {
		let proposerElement = document.getElementById("newLimitDayToken");
		let _tokenAddress = proposerElement.options[proposerElement.selectedIndex].value;
		let _limit = document.getElementById("newLimitDayLimit").value; 
		let _limitWei = parseFloat(_limit.replace(',','.').replace(' ',''));
		await this.wallet.methods.limitDaily(_tokenAddress, _limitWei).send({from: this.account, gas: 210000});
		this.updateInfo();
	},

	limitValue: async function() {
		let proposerElement = document.getElementById("newLimitValueToken");
		let _tokenAddress = proposerElement.options[proposerElement.selectedIndex].value;
		let _limit = document.getElementById("newLimitValueLimit").value; 
		let _limitWei = parseFloat(_limit.replace(',','.').replace(' ',''));
		await this.wallet.methods.limitValue(_tokenAddress, _limitWei).send({from: this.account, gas: 210000});
		this.updateInfo();
	},

	unlimitTo: async function() {
		await this.wallet.methods.unlimitTo().send({from: this.account, gas: 210000});
		this.updateInfo();
	},

	unlimitDaily: async function() {
		let proposerElement = document.getElementById("removeLimitDayToken");
		let _tokenAddress = proposerElement.options[proposerElement.selectedIndex].value;
		await this.wallet.methods.unlimitDaily(_tokenAddress).send({from: this.account, gas: 210000});
		this.updateInfo();
	},

	unlimitValue: async function() {
		let proposerElement = document.getElementById("removeLimitValueToken");
		let _tokenAddress = proposerElement.options[proposerElement.selectedIndex].value;
		await this.wallet.methods.unlimitValue(_tokenAddress).send({from: this.account, gas: 210000});
		this.updateInfo();
	},

	buildQuery: function() {
		let _recovery = this.account;
		this.query = '{ identities(where: { recovery: "' + _recovery + '" }) { id state owner recovery wallet { id name { id } isToLimited allowedDestinations { id name { id } } valueLimits { id isActive token { id tokenSymbol } limit } dayLimits { id isActive token { id tokenSymbol } limit } } } }';
	},

	instantiateIdentity: function(_address) {
		this.identity = new this.web3.eth.Contract(identityABI, _address);
	},

	instantiateWallet: function(_address) {
		this.wallet = new this.web3.eth.Contract(walletABI, _address);
	},

	querySubgraph: async function() {
		let response;
		let responseData;

		try {
			response = await fetch(GRAPH_URL + SUBGRAPH, {
				"method": 'POST',
				"headers": {
					"Accept": 'application/json',
					'Content-Type': 'application/json',
				},
				"body": JSON.stringify({
					query: this.query
				}),
			});
		} catch (error) {
			console.error(error);
		}

		if (response.ok) {
			responseData = await response.json();
		}
		
		return responseData.data.identities;
	}
}    

window.App = App;

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts= await web3.eth.getAccounts();
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    console.log(web3.version);
	App.start(window.web3);
	//App.updateInfo();
});