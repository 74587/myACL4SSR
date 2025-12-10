function main(proxies, metadata) {
  return proxies.filter(p => {
    if (metadata.groupID === 1) {  // 只针对第二个订阅
      if (p.name.match(/美国|US|us|圣何塞|洛杉矶|🇺🇸/) || 
          p.server.includes('pq.us') || 
          p.server.startsWith('134.195.') || 
          p.server.startsWith('203.10.96.')) {
        return false;  // 删除匹配的美国节点
      }
    }
    return true;  // 保留其他
  });
}
