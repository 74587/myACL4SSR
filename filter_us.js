function main(proxies, metadata) {
  return proxies.filter(p => {
    if (metadata.groupID === 1) {  // 只针对第二个订阅
      const name = p.name || '';
      // 只判断是否包含 "美国" 这两个汉字（最稳定、最不会失效）
      if (name.indexOf('美国') !== -1) {
        return false;  // 删除所有含 "美国" 的节点（包括 🇺🇸 美国圣何塞、美国洛杉矶、pq.us 的美国节点等）
      }
    }
    return true;
  });
}
