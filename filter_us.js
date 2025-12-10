function main(proxies, metadata) {
  return proxies.filter(p => {
    if (metadata.groupID === 1) {  // 只针对第二个订阅
      const name = p.name || '';
      const server = p.server || '';
      // 匹配节点名含关键词或 emoji，或 server 含美国特征
      if (name.includes('美国') || 
          name.includes('US') || 
          name.includes('us') || 
          name.includes('圣何塞') || 
          name.includes('洛杉矶') || 
          name.includes('🇺🇸')  {
        return false;  // 删除美国节点
      }
    }
    return true;  // 保留其他节点
  });
}
