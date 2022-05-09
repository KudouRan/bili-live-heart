export const files = [
  'tencent_scf.zip',
  'huawei_agc.zip',
  'baidu_cfc.zip',
  'aliyun_fc.zip',
  'index.js',
  'cat_bili_ql.js',
];

export const dir = 'temp';

export const proxyUrl = '';
export const githubUrl = 'https://github.com/catlair/BiliTools/releases/download/';

export const tag = 'v0.4.8';

export const input = {
  username: process.env.GITEE_USERNAME || '',
  password: process.env.GITEE_PASSWORD || '',
  tag: 'v0.4.8',
  repo: 'catlair/BiliTools',
  files,
  prerelease: false,
  title: '来自 Github BiliTools 的备份',
  description: '来自 Github BiliTools 的备份',
};
