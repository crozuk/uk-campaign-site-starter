import { siteConfig, type HomeSectionKey, type PageKey } from "@data/site";

export function isPageEnabled(pageKey: PageKey) {
  if (pageKey === "contact-your-mp") {
    return siteConfig.visibility.pages[pageKey] && siteConfig.mpLookup.pageEnabled;
  }

  return siteConfig.visibility.pages[pageKey];
}

export function isSectionEnabled(sectionKey: HomeSectionKey) {
  if (sectionKey === "mpLookupTeaser") {
    return (
      siteConfig.visibility.homeSections[sectionKey] &&
      siteConfig.mpLookup.enabled &&
      siteConfig.mpLookup.showOnHomepage
    );
  }

  if (sectionKey === "latestPosts") {
    return siteConfig.visibility.homeSections[sectionKey] && siteConfig.visibility.blog.showOnHomepage;
  }

  return siteConfig.visibility.homeSections[sectionKey];
}

export function isNavigationItemVisible(requirement?: PageKey | "blog") {
  if (!requirement) {
    return true;
  }

  if (requirement === "blog") {
    return siteConfig.visibility.blog.showInNavigation;
  }

  return isPageEnabled(requirement);
}

export function getVisibleNavigationItems() {
  return siteConfig.navigation.filter((item) => isNavigationItemVisible(item.requires));
}
