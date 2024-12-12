/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import getIsPro from '@/lib/actions/getIsPro'
import { MAX_FILE_SIZE, ONE_MB } from '@/lib/consts'
import getIpfsJwt from '@/lib/getIpfsJwt'
import { uploadFile } from '@/lib/ipfs/uploadFile'
import isSupportedFileType from '@/lib/isSupportedFileType'
import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider'
import { useState, ChangeEvent } from 'react'
import { toast } from 'react-toastify'
import usePrivyAddress from './usePrivyAddress'

const useFileUpload = () => {
  const {address} = usePrivyAddress()
  const { setName, setImageUri, setAnimationUri, setMimeType, animationUri } =
    useZoraCreateProvider()
  const [blurImageUrl, setBlurImageUrl] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const fileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setLoading(true)

    try {
      if (!event.target.files) throw new Error('No file selected')
      const file = event.target.files[0]
      if (!file) throw new Error('No file selected')
      if (!address) throw new Error('Wallet not connected')
      const { isPro } = await getIsPro(address)
      const jwtResponse = isPro ? await getIpfsJwt() : undefined
      const JWT = jwtResponse ?? undefined

      if (!isPro && file.size > MAX_FILE_SIZE) {
        throw new Error(`File size exceeds the maximum limit of ${MAX_FILE_SIZE / ONE_MB}MB.`)
      }
      const mimeType = file.type

      if (!isSupportedFileType(file.type)) {
        toast.error('File type is not supported!')
        setLoading(false)
        return
      }

      if (!isSupportedFileType(file.type)) {
        toast.error('File type is not supported!')
        setLoading(false)
        return
      }

      const isImage = mimeType.includes('image')

      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, '')
      setName(fileNameWithoutExtension)

      const { uri } = await uploadFile(file, JWT)
      if (isImage) {
        setImageUri(uri)
        setBlurImageUrl(URL.createObjectURL(file))
        if (!animationUri) {
          setMimeType(mimeType)
        }
      } else {
        setAnimationUri(uri)
        setMimeType(mimeType)
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message ?? 'Failed to upload the file. Please try again.')
    }
    setLoading(false)
  }

  return { fileUpload, loading, error, blurImageUrl }
}

export default useFileUpload
