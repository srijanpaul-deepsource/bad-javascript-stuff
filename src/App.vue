<template>
  <Story title="NeoNftCard">
    <Variant title="Nft Card">
      <NftCard :nft="nft" prefix="rmrk" show-price />
      <NftCard :nft="nft" prefix="rmrk" show-price />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import NftCard from './NeoNftCard.vue'

const nft2 = { name: 'foobar' }

const nft = {
  id: '1825819407-173',
  metadata:
    'ipfs://ipfs/bafkreig6e5x4nrif2jis4lbqmozx3el5nejskhbkbma7wmoyf2mrmehk2u',
  name: 'KoDragon#166',
  price: '20',
  sn: '173',
  image:
    'https://kodadot.mypinata.cloud/ipfs/bafybeigdh3ecetqmzplrjrovs5po23vwpikh2vgtfjai4vky5qzitjzaq4',
  collection: {
    id: '1825819407',
    name: 'KoDragons',
  },
}
</script>

