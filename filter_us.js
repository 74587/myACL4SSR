function main(proxies, metadata) {
  return proxies.filter(p => {
    if (metadata.groupID === 1) {  // 只针对第二个订阅
      const name = p.name || '';
      // 用正则匹配 emoji 🇺🇸 (U+1F1FA U+1F1F8) 和文字关键词
      if (/[\u{1F1FA}\u{1F1F8}]/.test(name) ||  // 匹配 🇺🇸 (surrogate pair 兼容)
          name.includes('美国') ||
          name.includes('US') ||
          name.includes('us') ||
          name.includes('圣何塞') ||
          name.includes('洛杉矶')) {
        return false;  // 删除美国节点
      }
    }
    return true;  // 保留其他
  });
}
