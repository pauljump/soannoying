window.SO_ANNOYING_DATA = {
  "release": "v0.1",
  "collectedAt": "2026-08-01",
  "totalObservations": 1340,
  "sourceCount": 7,
  "countsBySource": {
    "r/mildlyinfuriating": 197,
    "r/CrappyDesign": 377,
    "r/assholedesign": 441,
    "r/badUX": 78,
    "r/Windows11": 212,
    "r/techsupport": 24,
    "r/apple": 11
  },
  "candidates": [
    {
      "id": "candidate-cancel-subscriptions",
      "status": "screened",
      "title": "People cannot cancel recurring services cleanly",
      "why_big": "The failure can directly cost money and control. The pattern appears as blocked cancellation, repeated failed attempts, fees, forced support channels, and confusing flows across unrelated subscriptions.",
      "ai_opening": "An agent could find the actual cancellation route, explain consequences, prepare the request, complete it only with explicit approval, and preserve confirmation evidence.",
      "uncertainty": "The evidence is complaint-derived and does not prove whether each company complied with its stated terms or law.",
      "evidence": [
        "https://web.archive.org/web/20230102065707/https://old.reddit.com/r/assholedesign/comments/100rb5f/sirius_xm_wont_let_you_cancel_online_unless_you/",
        "https://web.archive.org/web/20230102090818/https://old.reddit.com/r/assholedesign/comments/1015vx0/adobe_charges_me_to_cancel_a_subscription_they/",
        "https://web.archive.org/web/20230103121350/https://old.reddit.com/r/assholedesign/comments/1026lav/the_telegraph_doesnt_allow_my_digital/"
      ]
    },
    {
      "id": "candidate-price-at-checkout",
      "status": "screened",
      "title": "The real price is hard to know until the purchase is almost finished",
      "why_big": "Unexpected fees, shipping, delivery charges, card surcharges, and upcharged menu prices waste time and money and make comparison shopping unreliable across delivery, retail, travel, and digital purchases.",
      "ai_opening": "An agent could inspect the full checkout path, normalize fees and terms, and show the real final price before the user commits.",
      "uncertainty": "The examples do not always separate deception from disclosed taxes, shipping, regional pricing, or ordinary service fees.",
      "evidence": [
        "https://web.archive.org/web/20230103165918/https://old.reddit.com/r/assholedesign/comments/102d23r/free_delivery_but_you_need_to_pay_higher_menu/",
        "https://web.archive.org/web/20230103014347/https://old.reddit.com/r/mildlyinfuriating/comments/101uh9e/door_dash_description_confirming_what_we_all_knew/",
        "https://web.archive.org/web/20230103012258/https://old.reddit.com/r/mildlyinfuriating/comments/101u0dg/this_12_dollar_delivery_fee_and_im_still_expected/",
        "https://web.archive.org/web/20230101225958/https://old.reddit.com/r/mildlyinfuriating/comments/100vfwm/i_was_charged_more_for_shipping_than_for_the/"
      ]
    },
    {
      "id": "candidate-support-without-waiting",
      "status": "screened",
      "title": "Getting help requires waiting on support instead of handing off the work",
      "why_big": "The cost is time and attention, often when something has already gone wrong. People are forced through queues, callbacks, unhelpful scripts, repeated escalation loops, and advice searches that do not solve the underlying block.",
      "ai_opening": "An agent could gather the facts, navigate first support steps, wait asynchronously where allowed, and return with a proposed resolution or exact escalation record.",
      "uncertainty": "The evidence does not show whether companies permit an AI or third party to act on a customer's behalf.",
      "evidence": [
        "https://web.archive.org/web/20230607085202/https://old.reddit.com/r/badux/comments/73mxml/if_your_automated_phone_system_does_not_support/",
        "https://web.archive.org/web/20230103012154/https://old.reddit.com/r/mildlyinfuriating/comments/101tzoz/stranded_by_winter_storm_expediatravelodge_dont/",
        "https://web.archive.org/web/20230121095856/https://old.reddit.com/r/mildlyinfuriating/comments/101us29/airbnb_host_stole_my_money/",
        "https://web.archive.org/web/20230101025628/https://old.reddit.com/r/techsupport/comments/1000rvl/been_stumped_on_this_for_more_than_a_week_and_i/"
      ]
    },
    {
      "id": "candidate-stop-unwanted-messages",
      "status": "screened",
      "title": "People cannot reliably stop unwanted email and text messages",
      "why_big": "The burden repeats, consumes attention, and can continue after someone tries to unsubscribe or report it. It appears across email and text rather than one product.",
      "ai_opening": "An agent could identify the sender, find the real opt-out path, take approved action, and verify that messages stop without exposing unrelated inbox data.",
      "uncertainty": "The evidence is title-derived and does not establish prevalence, legal responsibility, or whether each sender is actually the same organization.",
      "evidence": [
        "https://web.archive.org/web/20230101023036/https://old.reddit.com/r/assholedesign/comments/100983v/no_unsubscribe_option_i_mailed_them_to_which_they/",
        "https://web.archive.org/web/20230120010505/https://old.reddit.com/r/assholedesign/comments/10gfmx3/relentless_emails_from_nba_that_i_never_signed_up/",
        "https://web.archive.org/web/20230104013011/https://old.reddit.com/r/assholedesign/comments/102ojrk/every_time_i_unsubscribe_from_these_texts_that_i/"
      ]
    },
    {
      "id": "candidate-forced-account-data",
      "status": "screened",
      "title": "Basic access requires an account, personal data, notifications, or participation",
      "why_big": "People can be blocked from a simple task or pushed to share data, enable notifications, create content, or use a specific access route they did not need for the underlying task.",
      "ai_opening": "An agent could identify the minimum information actually needed, find an accessible route, and warn the user before sharing data or changing settings.",
      "uncertainty": "The examples mix privacy, business rules, parental monitoring, and accessibility barriers, so subpatterns may need separate review.",
      "evidence": [
        "https://web.archive.org/web/20211008171121/https://old.reddit.com/r/badux/comments/q423h7/dear_target_you_lost_a_150_sale_because_you/",
        "https://web.archive.org/web/20230112083117/https://old.reddit.com/r/CrappyDesign/comments/109s09t/telegram_does_not_let_you_remove_this_in_app/",
        "https://web.archive.org/web/20230103234926/https://old.reddit.com/r/mildlyinfuriating/comments/102mnth/i_monitor_my_kids_social_media_however_tiktok/",
        "https://web.archive.org/web/20230105053708/https://old.reddit.com/r/assholedesign/comments/103llbb/so_pretty_much_every_public_wifi_in_victoria_that/"
      ]
    },
    {
      "id": "candidate-paid-products-with-ads",
      "status": "screened",
      "title": "Paid products still interrupt the user with ads or upsells",
      "why_big": "The user has already paid or entered the main task and still loses attention to interruptions that are hard to avoid. The pattern appears across games, device software, media, and apps.",
      "ai_opening": "An agent could identify and suppress unwanted interruptions where the user has authority, while distinguishing ads from important system messages.",
      "uncertainty": "The evidence does not establish what users agreed to, and blocking commercial messages can conflict with terms or business models.",
      "evidence": [
        "https://web.archive.org/web/20230103130619/https://old.reddit.com/r/assholedesign/comments/1027o8m/cant_even_play_solitaire_on_pc_without_being/",
        "https://web.archive.org/web/20230105011935/https://old.reddit.com/r/assholedesign/comments/103gbc7/paid_and_ads/",
        "https://web.archive.org/web/20230119170525/https://old.reddit.com/r/assholedesign/comments/10g4gsx/huawei_file_browser_that_came_with_a_phone_i_paid/",
        "https://web.archive.org/web/20230112034245/https://old.reddit.com/r/CrappyDesign/comments/109p7v3/the_ads_pop_out_even_when_the_game_starts/"
      ]
    },
    {
      "id": "candidate-unwanted-recommendations",
      "status": "screened",
      "title": "Recommendation systems keep pushing unwanted content after weak or negative signals",
      "why_big": "Feeds consume attention repeatedly and can make a service feel uncontrollable when unwanted ads, livestreams, religious content, or adjacent topics keep returning despite the user's context.",
      "ai_opening": "An agent could classify unwanted feed items, apply available feedback controls, audit whether they worked, and suggest safer account or platform settings.",
      "uncertainty": "The examples show frustration with specific platforms and do not prove whether better use of built-in controls would solve every case.",
      "evidence": [
        "https://web.archive.org/web/20230112052229/https://old.reddit.com/r/CrappyDesign/comments/109r3fp/the_youtube_algorithm_is_so_dumb_that_after_i/",
        "https://web.archive.org/web/20230103231635/https://old.reddit.com/r/mildlyinfuriating/comments/102miju/youtube_keeps_pushing_these_livestreams_on_my/",
        "https://web.archive.org/web/20230103045949/https://old.reddit.com/r/mildlyinfuriating/comments/101yosd/people_have_the_right_to_religion_but_reddit_wont/",
        "https://web.archive.org/web/20230103032800/https://old.reddit.com/r/mildlyinfuriating/comments/101wsl5/got_a_youtube_ad_about_old_growth_trees_in/"
      ]
    },
    {
      "id": "candidate-travel-disruption-refunds",
      "status": "screened",
      "title": "Travel refunds depend on unreachable hosts, hotels, or managers during urgent disruption",
      "why_big": "Weather, accidental booking mistakes, and lodging failures can trap significant money while the traveler is sent through support, host permission, callback promises, and policy exceptions.",
      "ai_opening": "An agent could gather disruption evidence, identify applicable terms, submit the cancellation or refund request, and track escalation until a decision is recorded.",
      "uncertainty": "The evidence is strongest for lodging platforms and does not yet cover the full travel ecosystem.",
      "evidence": [
        "https://web.archive.org/web/20230103012154/https://old.reddit.com/r/mildlyinfuriating/comments/101tzoz/stranded_by_winter_storm_expediatravelodge_dont/",
        "https://web.archive.org/web/20230121095856/https://old.reddit.com/r/mildlyinfuriating/comments/101us29/airbnb_host_stole_my_money/"
      ]
    },
    {
      "id": "candidate-food-delivery-order-resolution",
      "status": "screened",
      "title": "Food delivery problems are hard to verify and resolve after the handoff",
      "why_big": "Wrong items, cold food, poor quality, app crashes, and weak refund paths waste money and leave the customer negotiating among app, driver, restaurant, and payment provider.",
      "ai_opening": "An agent could document the order state, compare it to the receipt and platform policy, prepare the support request, and track refund or redelivery outcomes.",
      "uncertainty": "Some examples are quality complaints rather than clear platform failures, so this should stay bounded to verifiable order and resolution failures.",
      "evidence": [
        "https://web.archive.org/web/20230103015623/https://old.reddit.com/r/mildlyinfuriating/comments/101umst/door_dash_response_to_them_sending_me_the_wrong/",
        "https://web.archive.org/web/20230103043426/https://old.reddit.com/r/mildlyinfuriating/comments/101y60k/delivery_driver_thinks_its_ok_to_make_their_food/",
        "https://web.archive.org/web/20230103013534/https://old.reddit.com/r/mildlyinfuriating/comments/101uaqb/all_3_major_food_delivery_apps_have_crashed/",
        "https://web.archive.org/web/20230103032656/https://old.reddit.com/r/mildlyinfuriating/comments/101wk7f/my_karls_deluxe_from_mr_beast_burger/"
      ]
    },
    {
      "id": "candidate-package-delivery-misdelivery",
      "status": "screened",
      "title": "Deliveries are marked or left in ways that do not get the item safely to the recipient",
      "why_big": "Package delivery failures cost money, time, and control because the buyer has to coordinate among seller, carrier, building, and support after the item is missing or exposed.",
      "ai_opening": "An agent could compile tracking, photos, building instructions, and prior incidents, then file the right claim or delivery instruction update and verify follow-up.",
      "uncertainty": "The evidence mixes non-delivery and careless placement; some failures may be isolated driver errors.",
      "evidence": [
        "https://web.archive.org/web/20230103015331/https://old.reddit.com/r/mildlyinfuriating/comments/101up6z/amazonpetcoups_failed_to_deliver_a_literal_brick/",
        "https://web.archive.org/web/20230103054104/https://old.reddit.com/r/mildlyinfuriating/comments/101zhik/how_delivery_driver_left_packages_at_my_building/",
        "https://web.archive.org/web/20230102071620/https://old.reddit.com/r/mildlyinfuriating/comments/100sxi5/my_amazon_package_never_arrived_and_this_was/"
      ]
    },
    {
      "id": "candidate-accessibility-fixtures-unusable",
      "status": "screened",
      "title": "Accessibility features exist on paper but are unusable in practice",
      "why_big": "A ramp, door button, or parking space that cannot actually be used blocks access and transfers time, risk, and physical burden to disabled people.",
      "ai_opening": "An agent could document the physical failure, compare it to relevant accessibility requirements, route the report to the right property owner or agency, and track remediation.",
      "uncertainty": "The evidence is visual and complaint-based; formal code violations would need jurisdiction-specific review.",
      "evidence": [
        "https://web.archive.org/web/20230112092921/https://old.reddit.com/r/CrappyDesign/comments/109sev9/the_new_school_in_my_community_has_a_wheel_chair/",
        "https://web.archive.org/web/20230113041831/https://old.reddit.com/r/CrappyDesign/comments/109vto3/this_ramp_at_my_school/",
        "https://web.archive.org/web/20230102075234/https://old.reddit.com/r/mildlyinfuriating/comments/100u1ew/this_person_even_took_a_bit_of_the_handicapped/"
      ]
    },
    {
      "id": "candidate-parking-blocks-access",
      "status": "screened",
      "title": "People lose access because others block assigned, disabled, or driveway parking",
      "why_big": "Parking misuse can block someone from leaving, reaching home, or using an accessible spot. The cost repeats around events, apartments, and shared lots, and the workaround often requires enforcement.",
      "ai_opening": "An agent could document repeat incidents, identify local reporting channels, prepare compliant reports, and track enforcement or towing outcomes.",
      "uncertainty": "The corpus repeats several related parking complaints, but local laws and enforcement options vary widely.",
      "evidence": [
        "https://web.archive.org/web/20230102075234/https://old.reddit.com/r/mildlyinfuriating/comments/100u1ew/this_person_even_took_a_bit_of_the_handicapped/",
        "https://web.archive.org/web/20230103054839/https://old.reddit.com/r/mildlyinfuriating/comments/101zj29/park_in_my_assigned_spot_enjoy_my_jack_stands/"
      ]
    },
    {
      "id": "candidate-unclear-public-hours-and-availability",
      "status": "screened",
      "title": "Published availability is wrong when people need a service in person",
      "why_big": "A person may spend scarce time, travel, or health capacity going to a pharmacy, store, or service that appears open or available online but is not usable when they arrive.",
      "ai_opening": "An agent could cross-check official hours, map status, recent user reports, phone availability, and alternatives before the user travels.",
      "uncertainty": "The strongest examples remain sparse; more categories would strengthen the pattern.",
      "evidence": [
        "https://web.archive.org/web/20230103022416/https://old.reddit.com/r/mildlyinfuriating/comments/101vfho/i_just_walked_a_mile_in_the_snow_because_ive_had/",
        "https://web.archive.org/web/20230102032913/https://old.reddit.com/r/mildlyinfuriating/comments/100tuhe/its_sunday_and_chick_fil_a_is_closed/"
      ]
    },
    {
      "id": "candidate-healthcare-admin-blocks-access",
      "status": "screened",
      "title": "Healthcare access depends on brittle administrative steps",
      "why_big": "People can lose time, treatment access, or money because insurance registration, pharmacy availability, support scripts, and transportation constraints do not align with urgent health needs.",
      "ai_opening": "An agent could gather insurance, pharmacy, eligibility, and local availability facts, then identify next steps and alternatives for the user to approve.",
      "uncertainty": "The examples include different healthcare contexts and should not be treated as medical advice or a single institutional cause.",
      "evidence": [
        "https://web.archive.org/web/20230103022416/https://old.reddit.com/r/mildlyinfuriating/comments/101vfho/i_just_walked_a_mile_in_the_snow_because_ive_had/",
        "https://web.archive.org/web/20230103233429/https://old.reddit.com/r/mildlyinfuriating/comments/102mo7r/no_premium_payments/"
      ]
    },
    {
      "id": "candidate-online-moderation-opacity",
      "status": "screened",
      "title": "Online moderation decisions are hard to understand or challenge",
      "why_big": "A ban, duplicate flag, blocked image link, or rule enforcement action can remove access or visibility while giving too little evidence for the user to know what happened or how to appeal.",
      "ai_opening": "An agent could summarize the cited rule, compare it to the user's post, prepare a concise appeal, and preserve source pointers without inflaming the dispute.",
      "uncertainty": "The evidence is from Reddit communities and may reflect community governance rather than a general platform defect.",
      "evidence": [
        "https://web.archive.org/web/20230103005611/https://old.reddit.com/r/mildlyinfuriating/comments/101tbbn/just_why/",
        "https://web.archive.org/web/20230103040956/https://old.reddit.com/r/mildlyinfuriating/comments/101xnl0/i_was_permanently_banned_from_rchristianity_for/",
        "https://web.archive.org/web/20230102031735/https://old.reddit.com/r/mildlyinfuriating/comments/100u519/i_cant_see_the_other_posts_that_the_dumb_bot/",
        "https://web.archive.org/web/20230101131604/https://old.reddit.com/r/techsupport/comments/10013eg/i_stepped_on_my_laptop_accidentally_and_display/"
      ]
    },
    {
      "id": "candidate-product-images-mislead",
      "status": "screened",
      "title": "Product and promotional images misrepresent what is actually being sold",
      "why_big": "Bad composites, misleading scale, incorrect packaging cues, and polished product images can cause buying mistakes that are hard to detect before purchase.",
      "ai_opening": "An agent could inspect listing images for scale inconsistencies, mismatched labels, edited artifacts, and missing context before the user buys.",
      "uncertainty": "Some examples are aesthetic mistakes rather than materially misleading listings, so the action boundary should focus on purchase-relevant mismatches.",
      "evidence": [
        "https://web.archive.org/web/20230113060419/https://old.reddit.com/r/CrappyDesign/comments/10a0j17/that_elbow_is_the_stuff_of_nightmares/",
        "https://web.archive.org/web/20230112085740/https://old.reddit.com/r/CrappyDesign/comments/109uhqq/yeah_i_can_totally_tell_the_difference_between/",
        "https://web.archive.org/web/20230112092528/https://old.reddit.com/r/CrappyDesign/comments/109uc7p/mmmm_my_favourite_south_australian_strawberries/",
        "https://web.archive.org/web/20230103024353/https://old.reddit.com/r/mildlyinfuriating/comments/101vu21/hair_dye_lied_and_didnt_even_work/"
      ]
    },
    {
      "id": "candidate-confusing-controls-and-signage",
      "status": "screened",
      "title": "Everyday controls and signs are hard to interpret at the moment of use",
      "why_big": "People lose time and make errors when toilets, transit signs, pumps, brackets, public signs, ports, and compatibility labels do not clearly communicate what action to take.",
      "ai_opening": "An agent could interpret a photo of the control, sign, port, or label, infer the intended action, and flag ambiguous designs for facility or product feedback.",
      "uncertainty": "Some examples are low-stakes or humorous; the stronger pattern is time-sensitive wayfinding, control use, and compatibility decisions.",
      "evidence": [
        "https://web.archive.org/web/20230113120501/https://old.reddit.com/r/CrappyDesign/comments/109ov44/took_me_a_minute_to_try_and_flush/",
        "https://web.archive.org/web/20230113003426/https://old.reddit.com/r/CrappyDesign/comments/109t9fl/2_buttons_one_flushes_the_toilet_the_other_one/",
        "https://web.archive.org/web/20230112063606/https://old.reddit.com/r/CrappyDesign/comments/109ptsj/this_sign_does_not_make_any_sense/",
        "https://web.archive.org/web/20230101154330/https://old.reddit.com/r/apple/comments/1003idh/can_i_charge_m2_macbook_air_with_usbc_cord/",
        "https://web.archive.org/web/20230101060449/https://old.reddit.com/r/techsupport/comments/1000wh0/the_new_ssd_doesnt_show_up_as_storage/"
      ]
    },
    {
      "id": "candidate-housing-layout-blocks-basic-use",
      "status": "screened",
      "title": "Housing fixtures are installed so basic daily use conflicts with another fixture",
      "why_big": "Bad apartment and fixture layouts repeatedly waste time and create physical friction because appliances, drawers, showers, toilets, and counters block or degrade normal use.",
      "ai_opening": "An agent could inspect photos or plans before move-in, identify likely conflicts, and create a repair or landlord request with evidence.",
      "uncertainty": "The examples are visual and may not represent code violations; some are inconvenient rather than severe.",
      "evidence": [
        "https://web.archive.org/web/20230102055329/https://old.reddit.com/r/mildlyinfuriating/comments/100tydd/brand_new_fridge_dishwasher_in_our_new_apartment/",
        "https://web.archive.org/web/20230113190742/https://old.reddit.com/r/CrappyDesign/comments/109txxs/i_realize_that_open_concept_bathrooms_are_a/",
        "https://web.archive.org/web/20230204142729/https://old.reddit.com/r/assholedesign/comments/10thldm/so_how_far_into_the_toilet_bowl_must_i_stick_my/",
        "https://web.archive.org/web/20230112102519/https://old.reddit.com/r/CrappyDesign/comments/109mpt5/this_stonework_toilet_should_make_cleaning_fun/"
      ]
    },
    {
      "id": "candidate-rental-maintenance-neglect",
      "status": "screened",
      "title": "Rental housing problems persist after tenants move in",
      "why_big": "A tenant can be stuck with broken amenities, unsafe installations, blocked sidewalks, persistent odors, or bad maintenance because the landlord or building process controls the fix.",
      "ai_opening": "An agent could document conditions, map lease and local reporting options, draft repair requests, and track deadlines and responses.",
      "uncertainty": "The evidence combines maintenance, inspection, snow clearing, and safety issues; subcategories may need separate review.",
      "evidence": [
        "https://web.archive.org/web/20230103053614/https://old.reddit.com/r/mildlyinfuriating/comments/101zf4q/the_gym_in_my_department_complex_collapsed_4/",
        "https://web.archive.org/web/20230103030913/https://old.reddit.com/r/mildlyinfuriating/comments/101we5t/apartment_complex_was_plowed_they_pushed_the/",
        "https://web.archive.org/web/20230112053556/https://old.reddit.com/r/CrappyDesign/comments/109o1oa/our_shower_in_croatian_airbnb/"
      ]
    },
    {
      "id": "candidate-unsafe-public-and-building-design",
      "status": "screened",
      "title": "Public and shared-space design creates avoidable physical risk",
      "why_big": "Bad ramps, exposed fixtures, wet paths, protruding nails, blocked sidewalks, and vehicle lighting can create injury risk in ordinary shared environments.",
      "ai_opening": "An agent could assess a photo or incident report, identify the likely responsible party, draft a safety complaint, and monitor repair or enforcement status.",
      "uncertainty": "Some rows require expert inspection before concluding a code violation or legal fault.",
      "evidence": [
        "https://web.archive.org/web/20230113041831/https://old.reddit.com/r/CrappyDesign/comments/109vto3/this_ramp_at_my_school/",
        "https://web.archive.org/web/20230103025645/https://old.reddit.com/r/mildlyinfuriating/comments/101w4b2/closeup_of_my_stairs_what_do_you_see/",
        "https://web.archive.org/web/20230103032346/https://old.reddit.com/r/mildlyinfuriating/comments/101wplh/this_ding_dong_on_my_commute_home_with_an_led/",
        "https://web.archive.org/web/20230112053556/https://old.reddit.com/r/CrappyDesign/comments/109o1oa/our_shower_in_croatian_airbnb/"
      ]
    },
    {
      "id": "candidate-neighbor-nuisance-hard-to-resolve",
      "status": "screened",
      "title": "Neighbor and local nuisances invade space, sleep, or outdoor access",
      "why_big": "Light, odor, trash, dog waste, and blocked shared areas can repeatedly remove control over home and neighborhood space while enforcement paths are unclear.",
      "ai_opening": "An agent could log incidents, identify responsible parties and local ordinances, prepare a neutral complaint, and track whether conditions improve.",
      "uncertainty": "Some examples are one-off or subjective; the stronger evidence involves repeated or physically intrusive conditions.",
      "evidence": [
        "https://web.archive.org/web/20230103011012/https://old.reddit.com/r/mildlyinfuriating/comments/101tq5x/a_christmas_projector_pointing_through_my_window/",
        "https://web.archive.org/web/20230102040430/https://old.reddit.com/r/mildlyinfuriating/comments/100u7wp/light_pollution_from_commercial_greenhouses_in_my/",
        "https://web.archive.org/web/20230101231909/https://old.reddit.com/r/mildlyinfuriating/comments/100v6wm/my_entire_neighborhood_smells_like_weed_and_i_can/",
        "https://web.archive.org/web/20230103022017/https://old.reddit.com/r/mildlyinfuriating/comments/101vc20/neighbors_left_all_their_trash_outside_the/"
      ]
    },
    {
      "id": "candidate-account-state-differs-across-devices",
      "status": "screened",
      "title": "The same account shows different history, settings, or transferred data on different devices",
      "why_big": "People reasonably expect one account to represent one current state. Divergent history, settings, sync status, passwords, or app data creates uncertainty about whether an action worked and forces manual checking across devices.",
      "ai_opening": "An agent could compare account views, identify which state is current, reconcile or explain the difference, and ask before making irreversible changes.",
      "uncertainty": "The evidence now spans account views and device transfers, but exact causes may differ between platform sync, app policy, and user settings.",
      "evidence": [
        "https://web.archive.org/web/20230113132443/https://old.reddit.com/r/CrappyDesign/comments/109mm3j/same_website_same_account_different_devices/",
        "https://web.archive.org/web/20230104012338/https://old.reddit.com/r/mildlyinfuriating/comments/102mmim/when_you_finally_watch_something_on_netflix_and/",
        "https://web.archive.org/web/20230101002258/https://old.reddit.com/r/apple/comments/1002zuz/mac_os_ventura_issues/",
        "https://web.archive.org/web/20230101142717/https://old.reddit.com/r/apple/comments/1003sfq/i_got_a_new_phone_and_tried_to_transfer_data_it/"
      ]
    },
    {
      "id": "candidate-apps-fail-at-urgent-moment",
      "status": "screened",
      "title": "Everyday apps fail right when the task is time-sensitive",
      "why_big": "When rideshare, delivery, insurance, payment, or checkout-related apps fail, the user may immediately lose money, transportation, food access, or service access.",
      "ai_opening": "An agent could detect failure state, try safe recovery steps, preserve screenshots, and route the user to the fastest available fallback.",
      "uncertainty": "The corpus includes isolated failures across services; more evidence is needed to separate outage, device, browser, and account-specific causes.",
      "evidence": [
        "https://web.archive.org/web/20230103031219/https://old.reddit.com/r/mildlyinfuriating/comments/101webr/uberlyft_apps_wouldnt_update_when_i_landed_so_i/",
        "https://web.archive.org/web/20230103013534/https://old.reddit.com/r/mildlyinfuriating/comments/101uaqb/all_3_major_food_delivery_apps_have_crashed/",
        "https://web.archive.org/web/20230103233429/https://old.reddit.com/r/mildlyinfuriating/comments/102mo7r/no_premium_payments/",
        "https://web.archive.org/web/20221231192251/https://old.reddit.com/r/techsupport/comments/1000ub1/cannot_process_payments_in_browsers_since_fresh/"
      ]
    },
    {
      "id": "candidate-unhelpful-error-messages",
      "status": "screened",
      "title": "Software reports failure without explaining what happened or what to do next",
      "why_big": "The user is already blocked, and the error message adds confusion instead of reducing it. This repeats across operating systems, checkout flows, device software, and ordinary apps, making recovery slower.",
      "ai_opening": "An agent could connect the error to device or account state, translate it into likely causes, and test reversible fixes instead of making the user search blindly.",
      "uncertainty": "The examples are low-context and may need splitting into diagnosis, recovery, and product-design failures.",
      "evidence": [
        "https://web.archive.org/web/20230102004524/https://old.reddit.com/r/Windows11/comments/100fqvo/does_windows_11_actually_tell_you_whats_wrong_or/",
        "https://web.archive.org/web/20230101121908/https://old.reddit.com/r/Windows11/comments/100ickf/what_does_this_error_mean_any_help_would_be_nice/",
        "https://web.archive.org/web/20210821162427/https://old.reddit.com/r/badux/comments/p8uerl/dear_reolink_do_not_tell_me_incorrect_password/",
        "https://web.archive.org/web/20230103013148/https://old.reddit.com/r/mildlyinfuriating/comments/101u6s4/when_i_inserted_my_card_the_screen_said_please/",
        "https://web.archive.org/web/20221231192251/https://old.reddit.com/r/techsupport/comments/1000ub1/cannot_process_payments_in_browsers_since_fresh/",
        "https://web.archive.org/web/20230101025628/https://old.reddit.com/r/techsupport/comments/1000rvl/been_stumped_on_this_for_more_than_a_week_and_i/"
      ]
    },
    {
      "id": "candidate-connectivity-and-device-diagnosis",
      "status": "screened",
      "title": "Connectivity and peripheral failures leave ordinary users guessing",
      "why_big": "Internet, USB, Wi-Fi, storage devices, printers, and chargers are routine dependencies. When they fail, the user often gets no clear cause and must guess through hardware, settings, drivers, compatibility, and support.",
      "ai_opening": "An agent could collect safe diagnostic state, run reversible checks, identify likely causes, and explain what changed.",
      "uncertainty": "Most evidence comes from Windows and hardware complaint titles, so generality beyond those ecosystems still needs testing.",
      "evidence": [
        "https://web.archive.org/web/20230101164937/https://old.reddit.com/r/Windows11/comments/100e6sy/wifi_keeps_disconnecting_disappearing_frequently/?ref=readnext_4",
        "https://web.archive.org/web/20230102073500/https://old.reddit.com/r/Windows11/comments/100n5ve/my_wifi_option_is_not_showing_up/",
        "https://web.archive.org/web/20230102080947/https://old.reddit.com/r/techsupport/comments/1000jde/usb_devices_keep_disconnecting_or_not_connecting/",
        "https://web.archive.org/web/20230103022039/https://old.reddit.com/r/mildlyinfuriating/comments/101v9ig/brand_new_battery_charger_power_supply_doesnt/",
        "https://web.archive.org/web/20221231200533/https://old.reddit.com/r/techsupport/comments/1000o6y/usb_wifi_dongle_for_nas/",
        "https://web.archive.org/web/20230101060449/https://old.reddit.com/r/techsupport/comments/1000wh0/the_new_ssd_doesnt_show_up_as_storage/"
      ]
    },
    {
      "id": "candidate-cross-device-files",
      "status": "screened",
      "title": "Moving, syncing, and organizing media files still requires fragile manual cleanup",
      "why_big": "People still have to move, split, sync, and verify media across storage systems, devices, and file formats. Mistakes can waste time or leave files unusable in the intended app.",
      "ai_opening": "An agent could map where files are, choose a safe transfer or conversion path, execute it with approval, and verify tracks or files were not lost.",
      "uncertainty": "The evidence is stronger with Apple sync observations but still mixes file transfer, media organization, and device sync failure.",
      "evidence": [
        "https://web.archive.org/web/20230103155830/https://old.reddit.com/r/Windows11/comments/102bl5f/windows_11_pc_cannot_see_three_videos_all_over_5/",
        "https://web.archive.org/web/20230101173836/https://old.reddit.com/r/techsupport/comments/1004n33/best_way_to_copy_sync_or_move_files_between/",
        "https://web.archive.org/web/20230103030748/https://old.reddit.com/r/mildlyinfuriating/comments/101wd2z/when_people_rip_a_cd_as_one_big_flac_file_rather/",
        "https://web.archive.org/web/20230101002258/https://old.reddit.com/r/apple/comments/1002zuz/mac_os_ventura_issues/",
        "https://web.archive.org/web/20230101095606/https://old.reddit.com/r/techsupport/comments/1000q1n/external_hard_drive_suddenly_slowed_when_copying/"
      ]
    },
    {
      "id": "candidate-personal-data-retention-risk",
      "status": "screened",
      "title": "Organizations keep sensitive personal data long after the original interaction",
      "why_big": "People can suffer breach risk years after a minor or abandoned transaction, with little visibility into what data is retained or how to get it deleted.",
      "ai_opening": "An agent could identify retained-data rights, draft deletion or access requests, track responses, and preserve evidence without spreading the sensitive data further.",
      "uncertainty": "The direct evidence is one strong example plus an adjacent parental-monitoring example; applicability depends heavily on jurisdiction and organization type.",
      "evidence": [
        "https://web.archive.org/web/20230101214539/https://old.reddit.com/r/mildlyinfuriating/comments/100txss/a_data_breach_at_a_college_i_applied_and_never/",
        "https://web.archive.org/web/20230103234926/https://old.reddit.com/r/mildlyinfuriating/comments/102mnth/i_monitor_my_kids_social_media_however_tiktok/"
      ]
    },
    {
      "id": "candidate-public-agency-property-damage",
      "status": "screened",
      "title": "Public or shared-service work damages property without clear notice or recourse",
      "why_big": "Municipal, contractor, or service actions can damage mailboxes, public facilities, or building features, leaving the affected person to discover the loss and navigate responsibility.",
      "ai_opening": "An agent could collect photos, dates, weather or service records, identify the responsible agency or contractor, and draft the claim or repair request.",
      "uncertainty": "The evidence is sparse and location-specific, so it should not be generalized beyond claim-handling friction.",
      "evidence": [
        "https://web.archive.org/web/20230103022607/https://old.reddit.com/r/mildlyinfuriating/comments/101vejd/city_destroyed_our_mailbox_and_neighbors_when/",
        "https://web.archive.org/web/20230113022354/https://old.reddit.com/r/CrappyDesign/comments/109wmgi/standalone_revolving_doors_for_if_you_just_really/"
      ]
    },
    {
      "id": "candidate-system-performance-degrades-without-clear-cause",
      "status": "screened",
      "title": "Computers become slow or unstable without a clear cause or reliable fix path",
      "why_big": "Slow right-click menus, sluggish media, browser freezes, broken indexing, and repeated log errors can consume hours and degrade routine work while the user guesses across software, drivers, storage, and operating system state.",
      "ai_opening": "An agent could collect symptoms, logs, recent changes, startup items, and hardware state, run reversible diagnostics, and produce a ranked repair plan with evidence.",
      "uncertainty": "The strongest new evidence comes from tech-support cases, so it shows burden and diagnostic ambiguity more than broad prevalence.",
      "evidence": [
        "https://web.archive.org/web/20230101025628/https://old.reddit.com/r/techsupport/comments/1000rvl/been_stumped_on_this_for_more_than_a_week_and_i/",
        "https://web.archive.org/web/20221231185840/https://old.reddit.com/r/techsupport/comments/1000vaw/cannot_figure_out_whats_causing_error_in_my/",
        "https://web.archive.org/web/20230102004524/https://old.reddit.com/r/Windows11/comments/100fqvo/does_windows_11_actually_tell_you_whats_wrong_or/",
        "https://web.archive.org/web/20230101121908/https://old.reddit.com/r/Windows11/comments/100ickf/what_does_this_error_mean_any_help_would_be_nice/"
      ]
    },
    {
      "id": "candidate-device-ecosystem-transitions-break-existing-setups",
      "status": "screened",
      "title": "Device ecosystem changes force accessory churn or break existing setups",
      "why_big": "Port, cable, and wireless-transition decisions can turn working chargers, cars, and accessories into compatibility problems. The cost can be money, lost access, and recurring uncertainty before buying or upgrading.",
      "ai_opening": "An agent could inventory the user's devices and accessories, identify compatibility risks before a purchase, and recommend the least disruptive upgrade or adapter path.",
      "uncertainty": "The new evidence is Apple-heavy and partly speculative about future port changes, so the broader pattern should be tested against other device ecosystems.",
      "evidence": [
        "https://web.archive.org/web/20230101154330/https://old.reddit.com/r/apple/comments/1003idh/can_i_charge_m2_macbook_air_with_usbc_cord/",
        "https://web.archive.org/web/20230101142224/https://old.reddit.com/r/apple/comments/1003ih7/if_apple_converted_to_usb_c_in_2023_what_will/",
        "https://web.archive.org/web/20221231200533/https://old.reddit.com/r/techsupport/comments/1000o6y/usb_wifi_dongle_for_nas/",
        "https://web.archive.org/web/20230101060449/https://old.reddit.com/r/techsupport/comments/1000wh0/the_new_ssd_doesnt_show_up_as_storage/"
      ]
    },
    {
      "id": "candidate-consumer-electronics-repair-cost-and-triage",
      "status": "screened",
      "title": "Small electronics damage creates expensive, uncertain repair decisions",
      "why_big": "A cracked or damaged screen can threaten device access while the owner has to judge whether symptoms will spread, whether warranty applies, and whether parts and labor are worth the cost.",
      "ai_opening": "An agent could classify visible damage from photos, estimate likely repair categories, check warranty or consumer-rights options, and prepare a repair-shop question list without claiming certainty.",
      "uncertainty": "The direct new evidence is laptop-display-heavy and includes accidental damage, so the pattern should stay bounded to triage and repair-cost uncertainty.",
      "evidence": [
        "https://web.archive.org/web/20230531101214/https://old.reddit.com/r/techsupport/comments/1000tt/my_monitor_suddenly_has_this_odd_circle_and/",
        "https://web.archive.org/web/20230101131604/https://old.reddit.com/r/techsupport/comments/10013eg/i_stepped_on_my_laptop_accidentally_and_display/"
      ]
    }
  ],
  "highlights": [
    {
      "id": "cdb1d9ce748c",
      "title": "If your automated phone system does not support calling the customer back when an operator is available - UPGRADE NOW! Do not make the user hold the phone for 15 minutes!",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230607085202/https://old.reddit.com/r/badux/comments/73mxml/if_your_automated_phone_system_does_not_support/",
      "bucket": "Support",
      "fixability": "hardware-physical"
    },
    {
      "id": "fc6fccba8540",
      "title": "windows 11 pc cannot see three videos (all over 5 min in length) on iphone se 3, how do I transfer the videos from iphone to pc?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103155830/https://old.reddit.com/r/Windows11/comments/102bl5f/windows_11_pc_cannot_see_three_videos_all_over_5/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "2093785170b9",
      "title": "AMC Stubs won't let you cancel close to your billing day unless you pay close to 50 dollars. ALSO you can't rejoin for six months",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103171242/https://old.reddit.com/r/assholedesign/comments/102dc1k/amc_stubs_wont_let_you_cancel_close_to_your/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "6b9f257986eb",
      "title": "Adobe charges me to cancel a subscription they have aready charged me for.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230102090818/https://old.reddit.com/r/assholedesign/comments/1015vx0/adobe_charges_me_to_cancel_a_subscription_they/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "6a9a36d49473",
      "title": "Frustrated with Postmates making my subscription difficult to cancel. I got Unlimited as a free trial and forgot about it until being charged today.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104014848/https://old.reddit.com/r/assholedesign/comments/102mvzs/frustrated_with_postmates_making_my_subscription/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "10e74e9db6c6",
      "title": "Android quick settings and lock screen",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230615235516/https://old.reddit.com/r/badux/comments/i68cmf/android_quick_settings_and_lock_screen/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "4bf1c03959e4",
      "title": "Dear Reolink - do not tell me Incorrect Password when I add a camera to my app BEFORE YOU HAVE ASKED ME FOR THE F'N PASSWORD!",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20210821162427/https://old.reddit.com/r/badux/comments/p8uerl/dear_reolink_do_not_tell_me_incorrect_password/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "0b33c357b557",
      "title": "Intel's Unison app syncs your iPhone to any Windows 11 PC. Here's how to get it.",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230124003028/https://old.reddit.com/r/Windows11/comments/101te40/intels_unison_app_syncs_your_iphone_to_any/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "5e76389c476c",
      "title": "The placement of the End Agent Chat button in Comcasts chat support",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119204444/https://old.reddit.com/r/assholedesign/comments/10g6xfm/the_placement_of_the_end_agent_chat_button_in/",
      "bucket": "Support",
      "fixability": "hardware-physical"
    },
    {
      "id": "2920b00bddd4",
      "title": "Sirius XM won't let you cancel online unless you chat with a live agent or call them.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230102065707/https://old.reddit.com/r/assholedesign/comments/100rb5f/sirius_xm_wont_let_you_cancel_online_unless_you/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "03123a15d535",
      "title": "AMC Stubs A List Won't Let You Cancel Soon before your member fee charges without charging you almost 50 dollars. AND you can't rejoin for six months",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103170643/https://old.reddit.com/r/assholedesign/comments/102d9yi/amc_stubs_a_list_wont_let_you_cancel_soon_before/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "d512d9c5caf0",
      "title": "Disabling the back-button on your website, will NOT make me want to stay longer or give you my business.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230606182406/https://old.reddit.com/r/badux/comments/642qev/disabling_the_backbutton_on_your_website_will_not/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "4727fafd9c65",
      "title": "Help with files restored from UWP windows store folder",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102230156/https://old.reddit.com/r/Windows11/comments/101qm4n/help_with_files_restored_from_uwp_windows_store/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "2f112605475a",
      "title": "I can't unsubscribe from Deezer emails because the unsubscribe button takes me to this",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104233402/https://old.reddit.com/r/assholedesign/comments/1030s10/i_cant_unsubscribe_from_deezer_emails_because_the/?ref=readnext_1",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "4bf255be0e4c",
      "title": "no select all button on the unsubscribe tab (btw look at the scroll wheel)",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104183703/https://old.reddit.com/r/assholedesign/comments/103a8lq/no_select_all_button_on_the_unsubscribe_tab_btw/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "8a0aa7cbe119",
      "title": "This mail has Unsubscribe button having same color as background. Also it is just a text, no hyperlink",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119080833/https://old.reddit.com/r/assholedesign/comments/10fvkv8/this_mail_has_unsubscribe_button_having_same/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "0b723ac10f24",
      "title": "Patreon won't unsubscribe me from a membership I want to cancel.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230121113615/https://old.reddit.com/r/assholedesign/comments/10ge1lu/patreon_wont_unsubscribe_me_from_a_membership_i/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "e7b0286036ee",
      "title": "New Windows User - Privacy - Is it possible to see which app or process is periodically requesting these permissions?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230101111729/https://old.reddit.com/r/Windows11/comments/100hi5d/new_windows_user_privacy_is_it_possible_to_see/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "c2239b9182f7",
      "title": "How to change windows android subsystem location?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102083249/https://old.reddit.com/r/Windows11/comments/100lmwn/how_to_change_windows_android_subsystem_location/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "ba018a9e35ae",
      "title": "How to snap/split screen in thirds by using keyboard commands instead of a mouse?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102054428/https://old.reddit.com/r/Windows11/comments/1014jd7/how_to_snapsplit_screen_in_thirds_by_using/",
      "bucket": "Design",
      "fixability": "software"
    },
    {
      "id": "4463de5740d7",
      "title": "When app icons are grouped in the taskbar any way to click on the group and bring all windows to the front?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103081844/https://old.reddit.com/r/Windows11/comments/1022ccv/when_app_icons_are_grouped_in_the_taskbar_any_way/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "827c07c68423",
      "title": "Unsubscribe button takes you to a non-functioning page? At least you have an unsubscribe button.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104222110/https://old.reddit.com/r/assholedesign/comments/103cdar/unsubscribe_button_takes_you_to_a_nonfunctioning/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "579984c510ac",
      "title": "Can't even watch a mov. File on my computer, and guess what Microsoft's solution is? Spend more money.",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230101155129/https://old.reddit.com/r/assholedesign/comments/1006co8/cant_even_watch_a_mov_file_on_my_computer_and/",
      "bucket": "Files",
      "fixability": "hardware-physical"
    },
    {
      "id": "bea09d8d1dfe",
      "title": "Closing an app to update it without asking the user...",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230917081746/https://old.reddit.com/r/badux/comments/1675a5d/closing_an_app_to_update_it_without_asking_the/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "18abd319b1a5",
      "title": "Phone systems should stop saying 'Please listen carefully because our menu has changed'...",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230604162901/https://old.reddit.com/r/badux/comments/39qngx/phone_systems_should_stop_saying_please_listen/",
      "bucket": "Support",
      "fixability": "hardware-physical"
    },
    {
      "id": "3cf691d891cc",
      "title": "YouTube app on iPhone searches for 'Shorts' first..",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103011807/https://old.reddit.com/r/assholedesign/comments/101twn0/youtube_app_on_iphone_searches_for_shorts_first/",
      "bucket": "Apps",
      "fixability": "hardware-physical"
    },
    {
      "id": "2f58bbed826a",
      "title": "Facebook Ad where the cancel button is in another language",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103083621/https://old.reddit.com/r/assholedesign/comments/1022mxp/facebook_ad_where_the_cancel_button_is_in_another/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "3c6618e363f5",
      "title": "*Free Delivery, but you need to pay higher menu prices and additional service fees lol",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103165918/https://old.reddit.com/r/assholedesign/comments/102d23r/free_delivery_but_you_need_to_pay_higher_menu/",
      "bucket": "Design",
      "fixability": "hardware-physical"
    },
    {
      "id": "b190b049ebbe",
      "title": "A huge effort by PipingRock to hide the unsubscribe button",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230103165628/https://old.reddit.com/r/assholedesign/comments/102d1k6/a_huge_effort_by_pipingrock_to_hide_the/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "fa7ae9a15662",
      "title": "Does Windows 11 actually tell you what's wrong or is it just another chime?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102004524/https://old.reddit.com/r/Windows11/comments/100fqvo/does_windows_11_actually_tell_you_whats_wrong_or/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "15be5d3b98ee",
      "title": "I found probably the oldest menu in Windows 11",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102084407/https://old.reddit.com/r/Windows11/comments/100tqcc/i_found_probably_the_oldest_menu_in_windows_11/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "17d583c54344",
      "title": "Looking for System and File Manager for Windows 11 that has similar functionality to CleanMyMac X for MacOS",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102032700/https://old.reddit.com/r/Windows11/comments/1011vaz/looking_for_system_and_file_manager_for_windows/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "90c174661335",
      "title": "Icons are not showing up on windows 11, please help!",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102080245/https://old.reddit.com/r/Windows11/comments/1016r0t/icons_are_not_showing_up_on_windows_11_please_help/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "56f09c6d5398",
      "title": "How to use Windows 11's File Explorer tabs",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20221226033717/https://old.reddit.com/r/Windows11/comments/101cntt/how_to_use_windows_11s_file_explorer_tabs/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "c8a14b1fa8d9",
      "title": "Black boxes on windows pop ups like app information or windows apps",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102103401/https://old.reddit.com/r/Windows11/comments/10192hi/black_boxes_on_windows_pop_ups_like_app/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "fb2413931d1d",
      "title": "Windows 11 is not supported with 7th gen Kabe Lake, but why?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102145416/https://old.reddit.com/r/Windows11/comments/101efav/windows_11_is_not_supported_with_7th_gen_kabe/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "6cd57d651cb7",
      "title": "Windows 11 Freezes / Can Sysinternals Process Monitor help?",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102163844/https://old.reddit.com/r/Windows11/comments/101gxbb/windows_11_freezes_can_sysinternals_process/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "77a3083cff79",
      "title": "Windows install added bunch of old files from one drive",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230102165026/https://old.reddit.com/r/Windows11/comments/101h87b/windows_install_added_bunch_of_old_files_from_one/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "ab778247ab71",
      "title": "Windows 11 22H2 update causes cpu to run 5-10c hotter.",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103021347/https://old.reddit.com/r/Windows11/comments/101v5ue/windows_11_22h2_update_causes_cpu_to_run_510c/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "0c76acb2a0f0",
      "title": "Xbox App crashing on launch - windows 11",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230123111444/https://old.reddit.com/r/Windows11/comments/101w90w/xbox_app_crashing_on_launch_windows_11/",
      "bucket": "Apps",
      "fixability": "software"
    },
    {
      "id": "e1def54a1787",
      "title": "Keyboard works on two windows simultaneously",
      "source": "r/Windows11",
      "sourceUrl": "https://web.archive.org/web/20230103180555/https://old.reddit.com/r/Windows11/comments/102emnd/keyboard_works_on_two_windows_simultaneously/",
      "bucket": "Files",
      "fixability": "software"
    },
    {
      "id": "7bcabfbd2be9",
      "title": "The Shonen Jump app doesn't let you read more than 100 chapters in a day, even with a subscription",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230104162129/https://old.reddit.com/r/assholedesign/comments/1036pjb/the_shonen_jump_app_doesnt_let_you_read_more_than/",
      "bucket": "Subscriptions",
      "fixability": "hardware-physical"
    },
    {
      "id": "2204a7464a51",
      "title": "bid ad blocking half of screen. the most annoying part is you cant close it and it covers the submit button",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119174609/https://old.reddit.com/r/assholedesign/comments/10g6d6z/bid_ad_blocking_half_of_screen_the_most_annoying/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "7668c9204c34",
      "title": "The official California employee benefits website only provides a form required for paid family leave in Spanish",
      "source": "r/assholedesign",
      "sourceUrl": "https://web.archive.org/web/20230119213050/https://old.reddit.com/r/assholedesign/comments/10gdsuo/the_official_california_employee_benefits_website/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "78d3be077bc3",
      "title": "Windows should not restart itself no matter how many times it warns the user that it is about to.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230604234050/https://old.reddit.com/r/badux/comments/39q9iu/windows_should_not_restart_itself_no_matter_how/",
      "bucket": "Files",
      "fixability": "hardware-physical"
    },
    {
      "id": "cc82b5f823a1",
      "title": "If your site does not allow pasting into the password field, you are discouraging strong passwords.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230614213123/https://old.reddit.com/r/badux/comments/59yvb7/if_your_site_does_not_allow_pasting_into_the/",
      "bucket": "Websites",
      "fixability": "hardware-physical"
    },
    {
      "id": "1f0bd92eed5c",
      "title": "Natural Direction is a terrible name for an option in the Trackpad Gesture setup in Macs and Windows. What is Natural to one person is not natural to another.",
      "source": "r/badUX",
      "sourceUrl": "https://web.archive.org/web/20230603125839/https://old.reddit.com/r/badux/comments/3zc655/natural_direction_is_a_terrible_name_for_an/",
      "bucket": "Files",
      "fixability": "hardware-physical"
    },
    {
      "id": "baab93f46087",
      "title": "Windows 10 - cannot uninstall DriverHub",
      "source": "r/techsupport",
      "sourceUrl": "https://web.archive.org/web/20230101042100/https://old.reddit.com/r/techsupport/comments/1000lka/windows_10_cannot_uninstall_driverhub/",
      "bucket": "Files",
      "fixability": "software"
    }
  ]
};
