import Image from 'next/image'
import { useCollectionProvider } from '@/providers/CollectionProvider'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import getChainIcon from '@/lib/getChainIcon'
import { COLLECTION_TYPE, METADATA_TYPE } from '@/lib/zora.types'
import { NEW_COLLECTION } from '@/lib/consts'

const Collection = ({
  metadata,
  collection,
}: {
  metadata: METADATA_TYPE
  collection: COLLECTION_TYPE
}) => {
  const { setSelectedCollection } = useCollectionProvider()

  if (collection.address === NEW_COLLECTION.address) {
    return (
      <button
        className="flex w-full"
        type="button"
      >
        <p>Create Collection</p>
      </button>
    )
  }

  return (
    <button
      className={`flex gap-2 items-center px-2 ${!metadata && 'hidden'}`}
      type="button"
      onClick={() =>
        setSelectedCollection({
          ...collection,
          metadata,
        })
      }
    >
      {metadata && (
        <>
          <div className="relative">
            <div className="w-10 aspect-[1/1] relative overflow-hidden">
              <Image
                src={getIpfsLink(metadata.image)}
                alt=""
                layout="fill"
                className="rounded-md overflow-hidden absolute object-cover object-center"
              />
            </div>
            <Image
              src={getChainIcon(collection.chainId)}
              alt="chain icon"
              width={15}
              height={15}
              className="rounded-full overflow-hidden absolute right-[-3px] bottom-[-3px]"
            />
          </div>
          <p>{metadata?.name}</p>
        </>
      )}
    </button>
  )
}

export default Collection
