import { create } from 'ipfs-http-client'

export const IPFSService = {
  addFile: async (file) => {
    const ipfs = create('https://ipfs.infura.io:5001/api/v0')
    const added = await ipfs.add(file)
    const cid = added.path;
    return cid;
  },
};
