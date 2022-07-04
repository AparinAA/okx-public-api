import OKXclient from "../index";
import path from 'path';
import dotenv from 'dotenv';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            api_key: string;
            passphrase: string;
            secret_key: string;
            ENV: 'test' | 'dev' | 'prod';
        }
    }
}

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

//Init secret api OKX
const secretDict_OKX = {
    'api_key': process.env.api_key,
    'passphrase': process.env.passphrase,
    'secret_key': process.env.secret_key,
};

if (!secretDict_OKX.api_key || !secretDict_OKX.secret_key || !secretDict_OKX.secret_key) {
    console.info("Api key or secret key, or passphrase invalid of OKX");
    throw "Api key or secret key, or passphrase invalid of OKX";
}
const firstEx = new OKXclient(secretDict_OKX.api_key, secretDict_OKX.secret_key, secretDict_OKX.passphrase);

async function check (firstEx: any) {
    const a = await firstEx.getName();
    return a; 
} 

test('Check connect API to OKEX', async () => {
    expect(await check(firstEx)).toBe("OKX");
})